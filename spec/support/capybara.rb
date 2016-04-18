require 'capybara/poltergeist'

class ActionDispatch::IntegrationTest
  # Make the Capybara DSL available in all integration tests
  include Capybara::DSL

  # disable logger
  module NullPoltergeistLogger
    def self.puts(*)
    end
  end

  # Reset sessions and driver between tests
  # Use super wherever this method is redefined in your individual test classes
  def teardown
    Capybara.reset_sessions!
  end

  # Driver setup to not fill output with logging
  Capybara.register_driver :poltergeist do |app, options|
    Capybara::Poltergeist::Driver.new(
      app, options = { timeout: 30, phantomjs_logger: NullPoltergeistLogger })
  end

  Capybara.configure do |config|
    config.javascript_driver = :poltergeist
    config.server_port       = 3000
    config.default_max_wait_time = 10 # in seconds
  end
end
