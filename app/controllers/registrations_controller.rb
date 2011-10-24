class RegistrationsController < Devise::RegistrationsController

  def after_sign_up
  end

  def after_sign_up_path_for(user)
     registrations_successful_path
  end

  def after_inactive_sign_up_path_for(user)
    raise session[:return_to]
    registrations_successful_path
  end


end
