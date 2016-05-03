namespace :assets do
  desc 'Create a zip file containing icons and markers'
  task :create_zip do
    %w{marker icons}.each do |zip_name|
      cmd=<<-EOF
        cd #{Rails.root.join('app', 'assets', 'images')}
        zip -9 -q -r #{Rails.root.join('public', zip_name)} #{zip_name}
      EOF
      system cmd
    end
  end

  desc 'Fix icon names'
  task :fix_image_names do
    src = ENV['src'] || '/Users/christoph/Downloads/wheelmapicons2/'
    mapping = {
      :parkinggarage => :parking,
      :beergarden => :biergarten,
      :movierental => :cinema,
      :laterne => :lantern,
      :stripclub2 => :stripclub,
      :chemistry => :chemist,
      :schreibwaren_web => :stationery,
      :carrepair => :car_repair
    }
    mapping.each do |old_name, new_name|
      puts "checking: #{old_name} => #{new_name}"
      system <<-EOT
      for i in `find #{src} -type f -name "#{old_name}.png"`
      do
        folder_name=`dirname $i`;
        base_name=`basename $i`;
        mv $folder_name/$base_name $folder_name/#{new_name}.png;
      done
      EOT
    end
  end

  desc 'Resize icons from map icon set.'
  task :resize_icons => :environment do

    src = ENV['src'] || '/Users/christoph/Downloads/wheelmapicons2/'
    NodeType.all.each do |node_type|
      name = File.basename(node_type.icon, '.png')
      puts "Processing #{node_type.icon}"
      system <<-EOT
      convert #{src}icons/#{node_type.icon} -strip -gravity SOUTH -crop 22x22+0+0 #{Rails.root.join('public', 'icons', node_type.icon)};
      convert #{src}icons/#{node_type.icon} -strip -gravity SOUTH -crop 22x22+0+0 -scale 44x44+0+0 #{Rails.root.join('public', 'icons', name)}@2x.png;
      convert #{src}icons_white/#{node_type.icon} -strip -gravity SOUTH -crop 22x22+0+0 #{Rails.root.join('public', 'icons_white', node_type.icon)};
      convert #{src}icons_white/#{node_type.icon} -strip -gravity SOUTH -crop 22x22+0+0 -scale 44x44+0+0 #{Rails.root.join('public', 'icons_white', name)}@2x.png;
      EOT
    end

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
