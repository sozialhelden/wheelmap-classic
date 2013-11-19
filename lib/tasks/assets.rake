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

  desc 'Resize icons from map icon set.'
  task :resize_icons do
    # puts "convert #{marker} -gravity south -crop 22x22+0+0 -strip #{Rails.root.join('public', 'marker', wheelchair, basename)}"
  end

  desc 'Resize marker from map icon set.'
  task :resize_marker => :environment do
    src = ENV['src'] || '/Users/christoph/Downloads/wheelmapicons2/marker_yes/'
    wheelchair = ENV['wheelchair'] || 'yes'
    NodeType.all.each do |node_type|
      system <<-EOT
      convert #{src}#{node_type.icon} -strip #{Rails.root.join('public', 'marker', wheelchair, node_type.icon)};
      EOT
    end
  end

end