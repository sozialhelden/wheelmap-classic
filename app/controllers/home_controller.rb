class HomeController < ApplicationController

  caches_action :index, :expires_in => 1.hour,
                        :unless => lambda { user_signed_in? || admin_user_signed_in? },
                        :cache_path => Proc.new {|c|
                          c.params.delete_if { |k,v| %w{lat lon zoom q layers a}.include?(k) }
                        }
  layout 'relaunch'

  def index
    render
  end
end
