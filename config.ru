# This file is used by Rack-based servers to start the application.
if RUBY_VERSION =~ /1.9/
  Encoding.default_external = Encoding::UTF_8
  Encoding.default_internal = Encoding::UTF_8
end

require ::File.expand_path('../config/environment', __FILE__)
run Wheelmap::Application
