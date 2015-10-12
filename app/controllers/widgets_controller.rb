class WidgetsController < ApplicationController

  before_filter :authenticate_with_api_key

  def embed
    if @widget
        render layout: 'embed'
    else
      head 404
    end
  end



  protected

  def widget_params
    params.require(:widget).permit(:lat, :lon, :height, :width, :categories)
  end

  def authenticate_with_api_key
    api_key = params[:key] || request.headers["X-API-KEY"]
    user    = api_key && User.find_by_api_key(api_key)
    @widget = user ? user.widget : nil
  end
end
