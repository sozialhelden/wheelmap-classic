class SearchController < ApplicationController
  URL = 'https://nominatim.openstreetmap.org/search'.freeze
  # URL = "http://open.mapquestapi.com/nominatim/v1/search"
  DEFAULT_PARAMS = { limit: 10, email: 'info@wheelmap.org', dedupe: '1' }.freeze
  USERAGENT = 'Wheelmap v1.0, (http://wheelmap.org)'.freeze

  TIMEOUT = 1

  before_filter :check_for_search_term

  rescue_from Timeout::Error,     with: :timeout
  rescue_from SocketError,        with: :timeout
  rescue_from Net::ReadTimeout,   with: :timeout

  def index
    @search_url = URI.parse(URL)
    @http = Net::HTTP.new(@search_url.host, @search_url.port)
    @http.read_timeout = 2
    @http.open_timeout = 2
    @query = DEFAULT_PARAMS.reverse_merge('accept-language': I18n.locale, q: params[:q])
    Counter.increment(source('search'))
    respond_to do |wants|
      wants.js do
        resp = make_request(:json)
        @result = ActiveSupport::JSON.decode(resp.body)
        render
      end
      wants.xml do
        resp = make_request(:xml)
        render xml: resp.body
      end
      wants.json do
        resp = make_request(:json)
        render json: ActiveSupport::JSON.decode(resp.body)
      end
      wants.html do
        resp = make_request(:json)
        @result = ActiveSupport::JSON.decode(resp.body)
        render
      end
    end
  end

  private

  def make_request(format)
    @query.reverse_merge!(format: format)
    resp = nil
    cache_key = "#{@search_url.path}?#{@query.to_param}"
    unless (resp = Rails.cache.read(cache_key.to_s))
      @http.start do |http|
        req = Net::HTTP::Get.new(cache_key.to_s, 'User-Agent' => USERAGENT)
        resp = http.request(req)
        # Cache response object if request was successfull
        # @TODO check if this really works (status code is a string, not an integer)
        Rails.cache.write(cache_key.to_s, resp, expires_in: 1.hour) if resp.code == 200
      end
    end
    resp
  end

  def check_for_search_term
    if params[:q].blank?
      if request.format == 'html'
        @query = DEFAULT_PARAMS.reverse_merge('accept-language': I18n.locale, q: '')
        @result = []
        render template: 'search/index', status: 406
      else
        @message = I18n.t('nodes.errors.param_missing', param: 'q')
        render template: 'shared/error', status: 406, format: request.format
      end
    end
  end

  def source(prefix = 'search')
    @source ||= [prefix, mobile_app? ? 'iphone' : 'website'].join('_')
  end

  def timeout(exception)
    Airbrake.notify(exception, component: self.class.name, parameters: params)

    render template: 'search/timeout', status: 503
  end
end
