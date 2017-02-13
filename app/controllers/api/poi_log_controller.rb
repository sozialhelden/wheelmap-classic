class Api::PoiLogController < Api::ApiController
  defaults :resource_class => ::PoiLog, :collection_name => 'poi_logs'

  actions :index

  resource_description do
    short 'Changes stream. Log of changed and deleted Pois'
    error :code => 401, :desc => "Authorization Required", meta: { message: "Authentication failed or was not provided. Verify that you have sent valid credentials via an api_key parameter. A 'Www-Authenticate' challenge header will be sent with this type of error response." }
    formats ['json', 'jsonp', 'xml']
    param :api_key, String, desc: "Your personal API key. Sign up for an account at http://wheelmap.org/users/sign_in", required: true
  end

  api :GET, "/nodes/changes", "Get node changes stream"
  param :since, Date, :required => true, :desc => "Specifies start date"
  def index
    @timestamp = params[:since]
    if @timestamp.nil?
      respond_to do |format|
        format.json { render :json => { :error => "Parameter 'since' required" }.to_json, :status => 400 }
      end
    else
      index! do |format|
        # We pass `:root => :pois` explicitly here because in case of an empty list
        # apparently acts_as_api is not able to figure out the desired value for the root element (which is `pois`) and defaults to `records`.
        format.json { render_for_api :changes_stream, :json => @poi_logs, :root => :pois, meta: meta, :status => 200 }
      end
    end
  end

  private

  def collection
    @poi_logs ||= end_of_association_chain
                    .where('created_at >= ?', @timestamp)
                    .paginate(:page => params[:page], :per_page => params[:per_page])
  end

  def meta
    {
      :conditions => {
        :page => params[:page],
        :per_page => params[:per_page],
        :format => params[:format],
        :locale => params[:locale] || I18n.locale
      },
      :meta => {
        :page => params[:page],
        :num_pages => collection.total_pages,
        :item_count_total => collection.total_entries,
        :item_count => collection.compact.size
      }
    }
  end
end
