require 'compass'
# If you have any compass plugins, require them here.
Compass.add_project_configuration(File.join(Rails.root, "config", "compass.config"))
Compass.configuration do |config|
  config.project_path = RAILS_ROOT
  config.sass_dir = "app/stylesheets"
  config.css_dir = "public/stylesheets"
end
Compass.configuration.environment = Rails.env.to_sym
Compass.configure_sass_plugin!
