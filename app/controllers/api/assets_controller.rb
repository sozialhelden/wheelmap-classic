class Api::AssetsController < Api::ApiController

  actions :index
  def index
    index! do |format|
      format.xml      {render_for_api :simple, :xml  => @assets, :root => :assets, :meta => meta}
      format.json     {render_for_api :simple, :json => @assets, :root => :assets, :meta => meta}
    end
  end


  protected

  def collection
    @assets ||= [Asset.new(id: 1, name: :marker, protocol: protocol), Asset.new(id: 2, name: :icons, protocol: protocol)]
  end

  def meta
    @meta = {
      :conditions => {
        :page => 1,
        :per_page => 15,
        :format => params[:format],
        :locale => params[:locale]
      },
      :meta => {
        :page => 1,
        :num_pages => 1,
        :item_count_total => 2,
        :item_count => 2
      }
    }
  end

  private

  def protocol
    request.ssl? ? :https : :http
  end
end