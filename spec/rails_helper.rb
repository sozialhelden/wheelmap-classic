  # This file is copied to spec/ when you run 'rails generate rspec:install'
  ENV["RAILS_ENV"] ||= 'test'
  require 'simplecov'
  SimpleCov.start
  require File.expand_path("../../config/environment", __FILE__)
  require 'rspec/rails'
  require 'capybara/rails'
  require 'capybara/rspec'
  require 'factory_girl'
  require 'webmock/rspec'
  require 'carrierwave/test/matchers'
  require 'shoulda-matchers'

  # Requires supporting ruby files with custom matchers and macros, etc,
  # in spec/support/ and its subdirectories.
  Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

  RSpec.configure do |config|
    # == Mock Framework
    #
    # If you prefer to use mocha, flexmock or RR, uncomment the appropriate line:
    #
    # config.mock_with :mocha
    # config.mock_with :flexmock
    # config.mock_with :rr
    config.mock_with :rspec

    # Remove this line if you're not using ActiveRecord or ActiveRecord fixtures
    config.fixture_path = "#{::Rails.root}/spec/fixtures"

    # If you're not using ActiveRecord, or you'd prefer not to run each of your
    # examples within a transaction, remove the following line or assign false
    # instead of true.
    config.use_transactional_fixtures = false
    config.before do
      WebMock.disable_net_connect!(:allow_localhost => true)
    end

    config.include EmailSpec::Helpers
    config.include EmailSpec::Matchers
    config.include Devise::TestHelpers, :type => :controller
    config.include FactoryGirl::Syntax::Methods
    config.include CarrierWave::Test::Matchers

    config.before(:all) do
      Delayed::Job.delete_all
    end

    # rspec-rails 3 will no longer automatically infer an example group's spec type
    # from the file location. You can explicitly opt-in to the feature using this
    # config option.
    # To explicitly tag specs without using automatic inference, set the `:type`
    # metadata manually:
    #
    #     describe ThingsController, :type => :controller do
    #       # Equivalent to being in spec/controllers
    #     end
    config.infer_spec_type_from_file_location!

    # replace deprecated ExampleGroup#example
    config.expose_current_running_example_as :example
  end

  Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      with.test_framework :rspec
      with.library :rails
    end
  end
