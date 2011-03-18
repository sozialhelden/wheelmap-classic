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
