class HomeController < ApplicationController

  layout 'relaunch'

  def index
=begin
    Find a way to cache this:

    unless user_signed_in? || admin_user_signed_in?
      expires_in 1.hour, public: true
    end
=end

    render
  end
end
