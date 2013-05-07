$KCODE = 'UTF8' unless RUBY_VERSION >= '1.9'

require 'ya2yaml'
require 'pathname'
require 'fileutils'

class LocaleFlatter
  def self.process(path)
    LocaleFlatter.new.process!(path)
  end

  def self.flatten(new_yaml, yaml, tree = nil)
    yaml.each do |k, v|
      full_key = tree.nil? ? k : [tree, k].join('.')
      if v.is_a? String
        new_yaml[full_key] = v.gsub(/&quot;/, '"')
      elsif v.is_a? Symbol
        new_yaml[full_key] = "!ruby/symbol #{v}"
      elsif v.is_a? Fixnum
        new_yaml[full_key] = v.to_s
      elsif v.is_a? TrueClass
        new_yaml[full_key] = v.to_s
      elsif v.is_a? FalseClass
        new_yaml[full_key] = v.to_s
      elsif v.is_a? Array
        v.each_with_index do |item, i|
          flatten(new_yaml, {i => item}, full_key)
        end
      elsif v.nil?
        new_yaml[full_key] = ""
      else
        flatten(new_yaml, v, full_key)
      end
    end
  end

  def process!(path)
    file = Pathname.new(path)
    yaml = YAML.load(file.read)
    locale = yaml.keys.first
    yaml = yaml[locale]

    locale_dir = Rails.root.join('tmp','mygengo', locale)
    FileUtils.mkdir_p locale_dir, :verbose => true unless File.exists?(locale_dir)

    # Mygengo uses the filename as the "section" name, so need to rename the "generic" yaml to something more useful.
    new_file = Pathname.new("./tmp/mygengo/#{locale}/#{file.basename}")

    new_yaml = {}
    LocaleFlatter.flatten(new_yaml, yaml) unless yaml.nil?
    new_file.open('w') do |f|
      # f.write({ locale => new_yaml }.ya2yaml(:syck_compatible => true))
      f.write "---\n"
      f.write "#{locale}:\n"
      new_yaml.each do |k,v|
        f.write "  \"#{k}\": \"#{v.gsub(/\"/,'\"')}\" \n"
      end
    end
  end
end
