$KCODE = 'UTF8' unless RUBY_VERSION >= '1.9'

require 'ya2yaml'
require 'pathname'
require 'fileutils'

class LocaleExtractor
  def self.process(path, locale, sub_key, file_name)
    LocaleExtractor.new.process!(path, locale, sub_key, file_name)
  end

  def process!(path, locale, sub_key, file_name)
    puts "Processing #{sub_key.inspect} => #{locale} in #{path}"
    file = Pathname.new(path)
    yaml = YAML.load(file.read)[locale.to_s]
    # puts yaml.inspect

    if !yaml.nil?
      # Mygengo uses the filename as the "section" name, so need to rename the "generic" yaml to something more useful.
      new_file = Rails.root.join('config', 'locales', locale.to_s, file_name)
      old_file = Rails.root.join('config', 'locales', locale.to_s, File.basename(path))

      remainder = yaml.slice!(*sub_key)
      new_yaml = yaml
      yaml = remainder

      unless new_yaml.empty?
        new_file.open('w') do |f|
          f.write({ locale.to_s => new_yaml }.ya2yaml(:syck_compatible => true).gsub(/\s+$/, '') + "\n")
        end

        old_file.open('w') do |f|
          f.write({ locale.to_s => yaml }.ya2yaml(:syck_compatible => true).gsub(/\s+$/, '') + "\n")
        end
      end
    end
  end
end
