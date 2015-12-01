class HomeController < ApplicationController

  layout 'relaunch'

  def index
    expires_in 1.hour, public: true, unless: lambda { user_signed_in? || admin_user_signed_in? }

    render
  end
end
