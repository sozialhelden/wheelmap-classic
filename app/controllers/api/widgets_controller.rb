class Api::WidgetsController < Api::ApiController
  def update
    @widget = Widget.find(params[:id])
    if @widget.update_attributes(widget_params)
      redirect_to widgets_profile_path
    else
      flash.now[:alert] = @user.errors.full_messages.to_sentence
      redirect_to widgets_profile_path
    end
  end
end
