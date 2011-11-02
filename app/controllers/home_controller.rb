class HomeController < ApplicationController

  caches_action :index, :expires_in => 1.hour,
                        :unless => lambda { user_signed_in? || admin_signed_in? },
                        :cache_path => Proc.new {|c|
                          c.params.delete_if { |k,v| %w{lat lon zoom q layers a}.include?(k) }.merge(:ab_splash_screen => ab_test("splash_screen").to_s)
                        }

  def index
    render
  end
end
