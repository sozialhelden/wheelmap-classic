class CommunitySupportController < ApplicationController
  def new

  end

  def create
    form_request = CommunitySupportRequest.new(form_params[:name], form_params[:email], form_params[:message])

    if form_request.valid?
      redirect_to root_path
    else
      render "new"
    end
  end

  private

  def form_params
    params.permit(:name, :email, :message)
  end
end
