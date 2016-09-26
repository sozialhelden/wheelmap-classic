class CommunitySupportController < ApplicationController
  def new
    @support_request = CommunitySupportRequest.new
    if current_user
      @support_request.email = current_user.email
    end
  end

  def create
    support_params = form_params.merge(user_agent: request.user_agent)
    @support_request = CommunitySupportRequest.new(support_params)
    if current_user
      @support_request.osm_username = current_user.osm_username
    end

    if @support_request.valid?
      CommunitySupportMailer.send_to_support_team(@support_request).deliver
      redirect_to root_path
    else
      render "new"
    end
  end

  private

  def form_params
    params.require(:community_support_request).permit(:name, :email, :message)
  end
end
