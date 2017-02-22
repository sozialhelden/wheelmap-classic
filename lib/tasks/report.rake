namespace :report do
  desc 'Report all metrics every minute'
  task minutely: :environment do
    hostname = `hostname`.delete("\n")
    time = Time.now.to_i
    rounded_time = time - (time % 60)

    queue = Librato::Metrics::Queue.new
    queue.add wheelchair_yes: { source: hostname, measure_time: rounded_time, value: Poi.fully_accessible.count }
    queue.add wheelchair_no: { source: hostname, measure_time: rounded_time, value: Poi.not_accessible.count }
    queue.add wheelchair_limited: { source: hostname, measure_time: rounded_time, value: Poi.limited_accessible.count }
    queue.add wheelchair_marked: { source: hostname, measure_time: rounded_time, value: Poi.tagged.count }
    queue.add toilet_yes: { source: hostname, measure_time: rounded_time, value: Poi.toilet_yes.count }
    queue.add toilet_no: { source: hostname, measure_time: rounded_time, value: Poi.toilet_no.count }
    queue.add toilet_total: { source: hostname, measure_time: rounded_time, value: Poi.toilet_tagged.count }
    queue.add user_total: { source: hostname, measure_time: rounded_time, value: User.count }
    queue.add user_with_osm_id: { source: hostname, measure_time: rounded_time, value: User.where('osm_id IS NOT NULL').count }
    queue.add user_with_oauth: { source: hostname, measure_time: rounded_time, value: User.where('oauth_token IS NOT NULL AND oauth_secret IS NOT NULL').count }
    queue.add login_total: { source: hostname, measure_time: rounded_time, value: User.sum(:sign_in_count), type: :counter }

    colors = { 'website' => '#4CA8D7', 'android' => '#79A600', 'iphone' => '#EEE' }

    if Counter.today.changed_within?(2)
      %w(tag_website tag_iphone tag_android toilet_website toilet_iphone toilet_android update_website update_iphone update_android create_website create_iphone create_android search_website search_iphone search_android).each do |attrib|
        queue.add attrib => { source: hostname, measure_time: rounded_time, value: Counter.sum(attrib), type: :counter }
      end
    end
    queue.submit unless queue.empty?
  end

  desc 'Report all metrics every hour'
  task hourly: [:regions, :photos, :iphone] do
  end

  desc 'Report iphone'
  task iphone: :environment do
    IphoneCounter.outdated.map(&:destroy)

    time = Time.now.to_i
    rounded_time = time - (time % 60)
    queue = Librato::Metrics::Queue.new

    %w(device_versions os_versions app_versions).each do |hash_method|
      IphoneCounter.send(hash_method.to_sym).each do |source, value|
        queue.add hash_method.singularize => {
          source: source.strip.tr(' ', '_'),
          measure_time: rounded_time,
          value: value
        }
      end
    end
    queue.submit unless queue.empty?
  end

  desc 'Report Photos'
  task photos: :environment do
    time = Time.now.to_i
    rounded_time = time - (time % 60)
    hostname = `hostname`.delete("\n")
    queue = Librato::Metrics::Queue.new
    metric_name = 'photo_count'
    queue.add metric_name =>
    { source: hostname,
      measure_time: rounded_time,
      value: Photo.count }
    queue.submit unless queue.empty?
  end

  desc 'Report regions'
  task regions: :environment do
    time = Time.now.to_i
    rounded_time = time - (time % 60)
    colors = { 'yes' => '#86AF4D', 'no' => '#D6382F', 'limited' => '#F19D46' }

    hostname = `hostname`.delete("\n")
    queue = Librato::Metrics::Queue.new
    Region.find_each do |region|
      %w(yes no limited).each do |status|
        metric_name = "#{region.slug}_#{status}"
        queue.add metric_name =>
        { source: hostname,
          measure_time: rounded_time,
          value: region.pois_of_children.with_status(Poi::WHEELCHAIR_STATUS_VALUES[status.to_sym]).count }
      end
    end
    queue.submit unless queue.empty?

    %w(yes no limited).each do |status|
      region_names = Region.pluck(:slug).map { |r| "#{r}_#{status}" }
      params = {
        names: region_names,
        color: colors[status],
        display_units_long: 'Orte',
        display_units_short: 'Orte'
      }
      begin
        Librato::Metrics.update_metrics(params)
        sleep 1
      rescue Exception => e
        STDERR.puts 'Failed to update metrics'
      end
    end
  end
end
