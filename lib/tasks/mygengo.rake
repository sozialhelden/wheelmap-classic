require 'locale_flatter'
require 'locale_expander'
require 'locale_extractor'

def gengo_dir
  Rails.root.join('tmp', 'mygengo')
end

def gengo_sub_dirs
  Rails.root.join('tmp', 'mygengo', '*', '*.yml')
end

namespace 'mygengo' do
  desc 'Exports the rails i18n locale files from config/locales into tmp/mygengo as flat json.'
  task :export => [:environment, :clear_tmp_dir] do
    I18n.available_locales.each do |locale|
      Dir["config/locales/#{locale}/*.yml"].each do |path|
        LocaleFlatter.process path
      end
    end
  end

  desc 'Imports yaml files from mygengo into config/locales ready for commiting.'
  task :import => [:environment, :clear_tmp_dir] do
    sh "wget -q -O #{gengo_dir}/all.zip http://mygengo.com/string/p/wheelmap.org-website-1/export/all/***REMOVED***"
    sh "cd #{gengo_dir} && unzip all.zip"
    Dir[gengo_sub_dirs].each do |path|
      LocaleExpander.process path
    end
  end

  desc 'Extracts subkey from translation file to external file.'
  task :extract => [:environment] do
    sub_key = ENV['KEY']
    file_name = ENV['FILE']
    raise "Use: bundle exec rake mygengo:extract KEY=devise FILE=authentication.yml" if sub_key.blank? or file_name.blank?
    I18n.available_locales.each do |locale|
      Dir[Rails.root.join("config", "locales", locale.to_s, "*.yml")].each do |path|
        LocaleExtractor.process path, locale, sub_key.split('.'), file_name
      end
    end
  end

  task :clear_tmp_dir do
    FileUtils.rm_rf gengo_dir, :verbose => true
    FileUtils.mkdir_p gengo_dir, :verbose => true
  end
end
