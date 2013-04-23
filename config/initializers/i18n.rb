# # tell the I18n library where to find your translations
I18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
I18n.default_locale = :de
unless Rails.env.development?
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n::Backend::Simple.send(:include, I18n::Backend::Cache)
  I18n.cache_store = ActiveSupport::Cache.lookup_store(:memory_store)
end