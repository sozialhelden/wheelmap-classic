namespace :premium do
  desc 'Upload provider entries to openstreetmap unless present'
  task upload: :environment do
    provider_name = ENV['PROVIDER'] || 'Streetspotr'
    raise 'Use bundle exec rake premium:upload PROVIDER=<file_name>' unless provider_name
    provider = Provider.find_by_name(provider_name)
    updating_user = User.wheelmap_visitor
    provider.provided_pois.each do |pp|
      node = pp.poi
      if node.try(:wheelchair) == 'unknown'
        UpdateTagsJob.enqueue(node.osm_id.abs, node.osm_type, { 'wheelchair' => pp.wheelchair }, updating_user, 'tag_website')
      end
    end
  end
end
