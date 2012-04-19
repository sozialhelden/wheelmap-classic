class SessionsController < Devise::SessionsController
  before_filter :create_register_url, :only => :new

  protected

  def create_register_url
    # consumer = OAuth::Consumer.new(OpenStreetMapConfig.oauth_key,
    #                                OpenStreetMapConfig.oauth_secret,
    #                                :site => OpenStreetMapConfig.oauth_site)
    # request_token = consumer.get_request_token
    # base_url = URI.parse(OpenStreetMapConfig.oauth_site + '/user/new')
    # base_url.query = {:referer => request_token.authorize_url}.to_param
    @register_url = 'base_url'
  end
end