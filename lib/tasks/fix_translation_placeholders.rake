desc 'Replace {{...}} with %{...} in yml file'
task fix_yml_placeholders: :environment do
  Dir.glob("#{Rails.root}/config/locales/*.yml").each do |locale_file|
    locale = locale_file.split('/').last
    write_file_name = locale_file.gsub(/#{locale}/, "new_#{locale}")

    write_file = File.open(write_file_name, 'w')
    read_file = File.open(locale_file, 'r')

    while (line = read_file.gets)
      write_file.puts line.gsub(/\{\{(.*?)\}\}/, '%{\1}')
    end

    read_file.close
    write_file.close

    FileUtils.mv write_file_name, locale_file, verbose: true
  end
end
