$KCODE = 'UTF8' unless RUBY_VERSION >= '1.9'

require 'ya2yaml'
require 'pathname'
require 'string'
require 'fileutils'

class LocaleExpander
  def self.process(path)
    LocaleExpander.new.process!(path)
  end

  def self.expand(new_yaml, yaml, locale)
    return if yaml[locale].nil?
    yaml[locale].keys.each do |k|
      append(new_yaml, k, yaml[locale][k])
    end
  end

  def self.append(new_yaml, key, val)
    tree = key.split(/\./)
    current = tree.shift
    if current.numeric?
      new_yaml.insert(current.to_i, val)
    elsif tree.size == 0
      if val.numeric?
        new_yaml[current] = val.to_i
      elsif val.boolean?
        new_yaml[current] = val.to_boolean
      elsif val.to_s == ''
        new_yaml[current] = nil
      else
        new_yaml[current] = val.to_s
      end
    else
      next_section = tree.join('.').numeric? ? Array.new : {}
      new_yaml[current] = next_section unless new_yaml.key?(current)
      append(new_yaml[current], tree.join('.'), val)
    end
  end

  def process!(path)
    file = Pathname.new(path)
    yaml = YAML.load_file(file)
    locale = yaml.keys.first
    new_yaml = {}
    LocaleExpander.expand(new_yaml, yaml, locale)

    locale_dir = Rails.root.join('config','locales', locale)
    FileUtils.mkdir_p locale_dir, :verbose => true unless File.exists?(locale_dir)
    new_file = Rails.root.join('config','locales', locale, file.basename)

    puts "writing to file #{new_file}"
    new_file.open('w') do |f|
    #  puts({locale => new_yaml}.ya2yaml)
      f.write({ locale => new_yaml.empty? ? nil : new_yaml }.ya2yaml(:syck_compatible => true).gsub(/\s*$/, ''))
    end
  end

end
