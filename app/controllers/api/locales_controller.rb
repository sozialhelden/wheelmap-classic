class Api::LocalesController < Api::ApiController
  def index
    index! do |format|
      format.xml      {render_for_api :simple, :xml  => @locales, :root => :locales, :meta => meta}
      format.json     {render_for_api :simple, :json => @locales, :root => :locales, :meta => meta}
    end
  end
  
  protected

  def collection
    @locales ||= Locale.all
  end

  def meta
    @meta = {
      :conditions => {
        :format => params[:format]
      },
      :meta => {
        :item_count_total => collection.size,
        :item_count => collection.size
        }
      }
  end

end