namespace :report do

  desc 'Report all metrics every minute'
  task :minutely => :environment do
    hostname = `hostname`.gsub(/\n/, '')
    queue = Librato::Metrics::Queue.new
    queue.add :wheelchair_yes     => { :source => hostname, :value => Poi.fully_accessible.count   }
    queue.add :wheelchair_no      => { :source => hostname, :value => Poi.not_accessible.count     }
    queue.add :wheelchair_limited => { :source => hostname, :value => Poi.limited_accessible.count }
    queue.add :wheelchair_marked  => { :source => hostname, :value => Poi.where('status < 8').count }
    queue.add :user_total         => { :source => hostname, :value => User.count }
    queue.add :user_with_osm_id   => { :source => hostname, :value => User.where('osm_id IS NOT NULL').count }
    queue.add :user_with_oauth    => { :source => hostname, :value => User.where('oauth_token IS NOT NULL AND oauth_secret IS NOT NULL').count }
    queue.add :login_total        => { :source => hostname, :value => User.sum(:sign_in_count), :type => :counter }

    if Counter.today.changed_within?(2)
      %w{ tag_website tag_iphone tag_android update_website update_iphone update_android create_website create_iphone create_android}.each do |attrib|
        queue.add attrib => { :source => hostname, :value => Counter.sum(attrib), :type => :counter }
      end
    end
    queue.submit

  end

  desc 'Report all metrics every hour'
  task :hourly => :environment do

    hostname = `hostname`.gsub(/\n/, '')
    queue = Librato::Metrics::Queue.new
    Region.find_each do |region|
      %w{ yes no limited }.each do |status|
        queue.add "#{region.slug.name}_#{status}" => { :source => hostname, :value => region.pois.with_status(Poi::WHEELCHAIR_STATUS_VALUES[status.to_sym]).count }
      end
    end
    queue.submit
  end

end