# # tell the I18n library where to find your translations
I18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
I18n.default_locale = :de
Tolk::Locale.primary_locale_name = 'en'
