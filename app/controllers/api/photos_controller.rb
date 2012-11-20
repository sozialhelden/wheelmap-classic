class Api::PhotosController < Api::ApiController

  belongs_to :user, :optional => true, :singleton => true
  belongs_to :node, :optional => true, :parent_class => Poi

  actions :index, :create, :destroy

  defaults :resource_class => Photo, :collection_name => 'photos'
  def index
    @photos = collection
    respond_to do |format|
      format.xml      {render_for_api :simple, :xml  => @photos, :root => :photos, :meta => meta}
      format.json     {render_for_api :simple, :json => @photos, :root => :photos, :meta => meta}
    end
  end

  protected

  def parent
    @parent ||= if params[:node_id]
      Poi.find(params[:node_id])
    else
      current_user
    end
  end

  def collection
    @photos ||= parent.photos.paginate(:page => params[:page], :per_page => params[:per_page])
  end

end