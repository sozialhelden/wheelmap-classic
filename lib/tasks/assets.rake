namespace :assets do
  desc 'Create a zip file containing icons and markers'
  task :create_zip do
    %w{marker icons icons_white}.each do |zip_name|
      cmd=<<-EOF
        cd #{Rails.root.join('public')}
        zip -9 -q -r #{zip_name} #{zip_name}
      EOF
      system cmd
    end
  end
end