class Api::PoiLogController < Api::ApiController
  defaults :resource_class => ::PoiLog, :collection_name => 'poi_logs'

  actions :index

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
        format.json { render_for_api :changes_stream, :json => @poi_logs, :root => :pois, :status => 200 }
      end
    end
  end

  private

  def collection
    @poi_logs ||= end_of_association_chain.where('created_at >= ?', @timestamp)
  end
end
