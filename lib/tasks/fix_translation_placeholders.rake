desc 'Replace {{...}} with %{...} in tolk translations'
task :fix_translation_placeholders => :environment do
  # we don't want no Tolk::Translation model attribute magic
  # so we'll use our own model class:
  class TextRecord < ActiveRecord::Base
    set_table_name :tolk_translations
  end

  cnt = 0
  TextRecord.where("text LIKE '%{{%'").find_each do |tr|
    new_text = tr.text.gsub(/\{\{([^}]*)\}\}/, '%{\1}')
    if new_text != tr.text
      cnt += 1
      tr.update_attribute(:text, new_text)
    else
      puts "Not replacing translation##{tr.id}: '#{tr.text}'"
    end
  end

  puts "Replaced #{cnt} placeholders."
end

desc 'Replace {{...}} with %{...} in yml file'
task :fix_yml_placeholders => :environment do
  Dir.glob("#{Rails.root}/config/locales/*.yml").each do |locale_file|
    locale = locale_file.split('/').last
    write_file_name = locale_file.gsub(/#{locale}/, "new_#{locale}")

    write_file = File.open(write_file_name, 'w')
    read_file = File.open(locale_file, 'r')
    
    while line = read_file.gets  
      write_file.puts line.gsub(/\{\{(.*?)\}\}/, '%{\1}')
    end

    read_file.close
    write_file.close

    FileUtils.mv write_file_name, locale_file, :verbose => true
  end
end