require 'big_sitemap'

namespace :sitemap do
  
  desc 'Generate static sitemap.xml files'
  task :generate => :environment do
    sitemap = BigSitemap.new(
      :primary_column => :osm_id,
      :url_options    => {:host => 'wheelmap.org'},
      :document_root  => "#{Rails.root}/public",
      :document_path  => "/",
      :ping_google    => true,
      :ping_yahoo     => false,
      :ping_bing      => true,
      :ping_ask       => true,
      :gzip           => true
    )
    
    sitemap.add(Poi,
      :select           => "osm_id, status, updated_at",
      :path             => 'nodes',
      :change_frequency => 'daily',
      :primary_column   => :osm_id,
      :priority         => lambda {|node| (1.0 / node.status) rescue 0.1 }
    )
    
    sitemap.generate
    sitemap.ping_search_engines(nil) if Rails.env.production?
  end
end