class HomeController < ApplicationController

  caches_action :index, :expires_in => 1.hour, :unless => lambda { user_signed_in? || admin_signed_in? }

  def index
    render
  end
end
