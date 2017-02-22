namespace :transifex do
  require 'yaml'

  # Prequisitions
  ## wheelmap: DE as default, transifex: EN as default

  # a) EN yes, DE no => remove key from EN
  # If a key exists in EN file but does not exist in DE file, then the key in EN file has to be removed in order to reduce translation costs.

  def compare(parent, ref_cleanup, ref_original)
    unused_keys = []

    ref_cleanup.keys.each do |key|
      if ref_original[key].nil?
        unused_keys << "#{parent}.#{key}"
      else
        if ref_cleanup[key].class == Hash
          unused_subkeys = compare(key, ref_cleanup[key], ref_original[key])
          unless unused_subkeys.empty?
            unused_subkeys.each do |subkey|
              unused_keys << "#{parent}.#{subkey}"
            end
          end
        end
      end
    end
    unused_keys
  end

  desc 'Show differences between EN and DE translation keys'
  task cleanup_en: :environment do
    file_names = [
      'active_admin.yml',
      'authentication.yml',
      'categories.yml',
      'dates.yml',
      'ember.yml',
      'rails.yml',
      'relaunch.yml',
      'wheelmap.yml'
    ]

    file_names.each do |file|
      puts '---------------------------------'
      puts file

      en_file = YAML.load_file("config/locales/en/#{file}")
      de_file = YAML.load_file("config/locales/de/#{file}")

      en_tree = en_file[en_file.keys.first]
      de_tree = de_file[de_file.keys.first]
      unused_translation_keys = compare('en', en_tree, de_tree)
      puts unused_translation_keys
    end
  end

  # b) DE yes, EN no => remove key from DE (unused entries)
  # If a key exists in DE file but not in EN file, then the key should be also removed in DE file to avoid unused entries.

  desc 'Show differences between DE and EN translation keys'
  task cleanup_de: :environment do
    file_names = [
      'active_admin.yml',
      'authentication.yml',
      'categories.yml',
      'dates.yml',
      'ember.yml',
      'rails.yml',
      'relaunch.yml',
      'wheelmap.yml'
    ]

    file_names.each do |file|
      puts '---------------------------------'
      puts file

      en_file = YAML.load_file("config/locales/en/#{file}")
      de_file = YAML.load_file("config/locales/de/#{file}")

      en_tree = en_file[en_file.keys.first]
      de_tree = de_file[de_file.keys.first]
      unused_translation_keys = compare('de', de_tree, en_tree)
      puts unused_translation_keys
    end
  end
end
