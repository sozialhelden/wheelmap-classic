if Rails.env.production? || Rails.env.staging?
  I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
  I18n::Backend::Simple.send(:include, I18n::Backend::Cache)
  I18n.cache_store = ActiveSupport::Cache.lookup_store(:memory_store)
end
