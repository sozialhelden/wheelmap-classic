class WidgetsController < ApplicationController

  def embed
    api_key = params[:key] || request.headers["X-API-KEY"]
    if user = User.find_by_authentication_token(api_key)
        @widget = user.widget
        render layout: false
    else
      head 404
    end
  end

  def update
    @widget = Widget.find(params[:id])
    if @widget.update_attributes(widget_params)
      redirect_to widgets_profile_path
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      redirect_to widgets_profile_path
    end
  end

  protected

  def widget_params
    params.require(:widget).permit(:lat, :lon, :height, :width, :categories)
  end

end
