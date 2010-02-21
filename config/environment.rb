RAILS_GEM_VERSION = '2.3.5' unless defined? RAILS_GEM_VERSION

require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  config.gem 'ambethia-smtp-tls', :lib => 'smtp-tls', :source => 'http://gems.github.com/'
  config.gem 'thoughtbot-factory_girl', :lib => 'factory_girl', :source => 'http://gems.github.com'
  config.gem 'authlogic', :version => '~> 2.0'
  config.gem 'cucumber'
  config.gem 'rspec-rails', :lib => 'spec/rails'
  config.gem 'rspec', :lib => 'spec'
  config.gem 'paperclip', :source => 'gemcutter.org'
  config.gem 'compass', :source => 'gemcutter.org'
  config.gem 'redgreengrid', :source => 'gemcutter.org'
  config.i18n.default_locale = :de
end

Haml::Template.options[:format] = :html5
Haml::Template.options[:attr_wrapper] = '"'

require 'smtp_tls'

ActionMailer::Base.raise_delivery_errors = true
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => "587",
  :authentication => :plain,
  :user_name => "ka@hagenburger.net",
  :password => "72A278"
}
