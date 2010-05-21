ENV["RAILS_ENV"] ||= 'test'
require File.dirname(__FILE__) + "/../../../../config/environment" unless defined?(RAILS_ROOT)
require 'spec/autorun'
require 'spec/rails'
require 'action_controller'
require 'action_controller/assertions/selector_assertions'

include ActionController::Assertions::SelectorAssertions

require File.dirname(__FILE__) + "/../lib/redgreengrid"

Spec::Runner.configure do |config|

end
