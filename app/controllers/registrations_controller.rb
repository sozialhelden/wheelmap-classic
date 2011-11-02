class RegistrationsController < Devise::RegistrationsController

  def after_sign_up
    flash[:notice] = nil
    bingo! 'signup'
  end

  def after_sign_up_path_for(user)
     registrations_successful_path
  end

  def after_inactive_sign_up_path_for(user)
    registrations_successful_path
  end


end
