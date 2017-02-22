require 'float'

class ActionController::UnpermittedValue < IndexError
  attr_reader :key, :value, :allowed_values

  def initialize(key, value, allowed_values)
    @key            = key
    @value          = value
    @allowed_values = allowed_values
    super("found unpermitted value for paramter #{key}: #{value} must be one of #{allowed_values.join(', ')}")
  end
end

class Api::ApiController < ApplicationController
  # Include Inherited Resources behaviour
  inherit_resources

  custom_actions collection: :not_found

  # The order is essential, catch all exception first, fine grained exceptions to the bottom
  # rescue_from Exception, :with => :render_500
  # rescue_from ActiveRecord::RecordNotFound, :with => :render_404

  PER_PAGE = 200
  PER_PAGE_MAX = 1000
  PAGE = 1

  layout false

  # Allow requests withouth authenticity token
  skip_before_filter :verify_authenticity_token

  # If nothing is set, default to JSON
  before_filter :set_default_response_format

  # Make sure a valid API Key is provided
  before_filter :authenticate_by_token

  # If no param is set, default to PAGE
  before_filter :set_default_page

  # If no param is set, default to PER_PAGE
  before_filter :set_default_per_page

  # Normalize given bounding box
  before_filter :normalize_bbox

  def index
    @resources = [
      {
        categories: {
          description: 'The categories Collection Resource',
          href: api_categories_path
        }
      }, {
        nodes: {
          description: 'The nodes Collection Resource',
          href: api_nodes_path
        }
      }, {
        node_types: {
          description: 'The node_type Resource',
          href: api_node_types_path
        }
      }, {
        locales: {
          description: 'The locales Resource',
          href: api_locales_path
        }
      }, {
        photos: {
          description: 'The photos Resource',
          href: api_user_photos_path
        }
      }
    ]

    respond_to do |format|
      format.xml      { render xml: @resources.to_xml(root: :resources) }
      format.json     { render json: { resources: @resources }.to_json }
    end
  end

  def not_found
    render_404(ActionController::RoutingError.new("No route matches '#{request.path}', check API documentation for available resources: /api/docs/resources"))
  end

  protected

  def normalize_bbox
    if params[:bbox]
      left, bottom, right, top = params[:bbox].split(',').map(&:to_f)
      left = left.floor_to(3)
      bottom = bottom.floor_to(3)
      right = right.ceil_to(3)
      top = top.ceil_to(3)
      if right == left
        left   -= 0.001
        right  += 0.001
      end
      if top   == bottom
        bottom -= 0.001
        top    += 0.001
      end

      params[:bbox] = [left, bottom, right, top].join(',')
    end
  end

  def set_default_response_format
    symbolized_format = request.format.to_sym
    request.format = :json if symbolized_format == :html || symbolized_format.blank?
    params[:format] = request.format.to_sym
  end

  def set_default_page
    params[:page] ||= PAGE
    params[:page] = params[:page].to_i
  end

  def set_default_per_page
    params[:per_page] ||= PER_PAGE
    params[:per_page] = params[:per_page].to_i
    params[:per_page] = [params[:per_page], PER_PAGE_MAX].min
  end

  def render_404(exception)
    Rails.logger.error '404'
    render_exception(exception, 404)
  end

  def render_500(exception)
    render_exception(exception, 500)
  end

  def render_exception(exception, status)
    Rails.logger.error "[API] Exception #{exception.class}: #{exception.message}" # {}"\n#{exception.backtrace}"
    respond_to do |format|
      format.xml { render xml: { error: exception.message }.to_xml(root: false), status: status }
      format.json { render json: { error: exception.message }.to_json, status: status }
    end
  end

  alias render_exception_without_notification render_exception
  define_method(:render_exception) do |*args|
    Rails.logger.error 'NOTIFY HOPTOAD!'
    Airbrake.notify(args[0], component: self.class.name, parameters: params)
    send('render_exception_without_notification', *args)
  end

  attr_reader :current_user

  def authenticate_by_token
    api_key = params[:api_key] || request.headers["X-API-KEY"]
    @current_user = User.find_by_authentication_token(api_key)
    return if api_key && @current_user

    render_exception_without_notification(Exception.new('invalid API key.'), 401) unless current_user
  end

  def meta
    @meta = {
      conditions: {
        page: params[:page],
        per_page: params[:per_page],
        format: params[:format],
        locale: params[:locale]
      },
      meta: {
        page: params[:page],
        num_pages: collection.total_pages,
        item_count_total: collection.total_entries,
        item_count: collection.compact.size
      }
    }
  end
end
