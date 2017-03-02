class ConfirmationsController < Devise::ConfirmationsController
  # GET /resource/confirmation?confirmation_token=abcdef
  def show
    self.resource = resource_class.confirm_by_token(params[:confirmation_token])

    if resource.errors.empty?
      set_flash_message :notice, :confirmed
      flash[:view] = '/registrations/confirmed'
      sign_in_and_redirect(resource_name, resource)
    else
      render :new
    end
  end
end
