namespace :generate do
  desc 'Generate i18n translations for javascript'
  task i18n_js: :environment do
    langfilejs = 'public/javascripts/openlayers_i18n.js'
    file = File.new(langfilejs, 'w')
    I18n.available_locales.sort_by(&:to_s).each do |language|
      next if %w(de-CH ja pt-PT ru zh pt).include? language.to_s
      file.write("OpenLayers.Lang.#{language} = {\n")
      file.write("  'wheelchair_label_yes': \"#{I18n.t('home.index.popup.form.yes', locale: language)}\",\n")
      file.write("  'wheelchair_label_limited': \"#{I18n.t('home.index.popup.form.limited', locale: language)}\",\n")
      file.write("  'wheelchair_label_no': \"#{I18n.t('home.index.popup.form.no', locale: language)}\",\n")
      file.write("  'wheelchair_label_unknown': \"#{I18n.t('home.index.popup.form.unknown', locale: language)}\",\n")
      file.write("  'wheelchair_update_button': \"#{I18n.t('home.index.popup.form.save', locale: language)}\",\n")
      file.write("  'more_information': \"#{I18n.t('home.index.popup.more', locale: language)}\",\n")
      file.write("  'wheelchair_help': \"#{I18n.t('home.index.popup.help', locale: language)}\"\n")
      file.write("};\n")
    end
    file.close
  end
end
