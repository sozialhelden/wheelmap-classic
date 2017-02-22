# Version of your assets, change this if you want to expire all your assets
Rails.application.config.assets.version = '1.0'

# Precompile additional assets for assets pipeline (/assets/fonts)
Rails.application.config.assets.precompile += %w(.swf)

# Precompile additional assets for assets pipeline (/assets/fonts)
Rails.application.config.assets.precompile += %w(.svg .eot .woff .ttf)

# Needed for the ActiveAdmin's manifest assets.
Rails.application.config.assets.precompile += ['active_admin.css', 'active_admin.js']

# Precompile the manifests for assets pipeline ('/assets/application.scss' + '/assets/application.js')
Rails.application.config.assets.precompile += ['application.js']

# Precompile additional assets for assets pipeline (/assets/stylesheets)
Rails.application.config.assets.precompile += %w(relaunch.css relaunch_ie.css screen.css node.css nodes.css search.css react-select.css)

# Precompile additional assets for assets pipeline (/assets/javascripts)
Rails.application.config.assets.precompile += %w(relaunch.js modernizr.js search.js nodes.js app.js test.js)
Rails.application.config.assets.precompile += %w(i18n/*.js react-application.js)
