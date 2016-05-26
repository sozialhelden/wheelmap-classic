Rails.application.config.after_initialize do
  I18n.enforce_available_locales = false

  I18n.load_path += Dir[Rails.root.join('config', 'locales', '**', '*.{rb,yml}')]
  I18n.default_locale = :de
  if Rails.env.production?
    # Use only whitelisted locales for production
    I18n.available_locales = [:ar, :bg, :da, :de, :el, :en, :es, :fr, :hu, :is, :it, :ja, :ko, :lv, :pl, :pt_BR, :ru, :sk, :sv, :tlh, :tr, :zh_TW]
  else
    I18n.available_locales = [:de]
    # Use all locales that we have translations when not in production
    Dir.glob(Rails.root.join('config', 'locales', '*')).each do |directory|
      locale = File.basename(directory).to_sym
      I18n.available_locales << locale unless I18n.available_locales.include?(locale)
    end
  end

  if Rails.env.production? || Rails.env.staging?
    I18n::Backend::Simple.send(:include, I18n::Backend::Fallbacks)
    I18n::Backend::Simple.send(:include, I18n::Backend::Cache)
    I18n.cache_store = ActiveSupport::Cache.lookup_store(:memory_store)
  end
end
