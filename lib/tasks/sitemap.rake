require 'big_sitemap'
include Rails.application.routes.url_helpers # Allows access to Rails routes

namespace :sitemap do
  desc 'Generate static sitemap.xml files'
  task generate: :environment do
    BigSitemap.generate(url_options: {
                          host: 'wheelmap.org'
                        },
                        document_root: Rails.root.join('public'),
                        document_path: '/',
                        gzip: true,
                        partial_update: false,
                        ping_google: Rails.env.production?,
                        ping_bing: Rails.env.production?,
                        ping_ask: false,
                        ping_yandex: Rails.env.production?) do
      # Add a static page
      add '/map'

      Poi.find_each(start: Poi.lowest_id, select: [:osm_id, :status, :updated_at]) do |poi|
        add(node_path(poi), change_frequency: 'daily',
                            priority: (1.0 / poi.status),
                            last_modified: poi.updated_at)
      end

      Region.find_each do |region|
        NodeType.find_each do |node_type|
          add("/map/#{region.slug}/#{node_type.identifier}/wheelchair/yes",     change_frequency: 'daily', priority: 1.0) if Poi.where(node_type_id: node_type.id, region_id: region.id, status: 1).count > 0
          add("/map/#{region.slug}/#{node_type.identifier}/wheelchair/no",      change_frequency: 'daily', priority: 1.0) if Poi.where(node_type_id: node_type.id, region_id: region.id, status: 2).count > 0
          add("/map/#{region.slug}/#{node_type.identifier}/wheelchair/limited", change_frequency: 'daily', priority: 1.0) if Poi.where(node_type_id: node_type.id, region_id: region.id, status: 4).count > 0
          add("/map/#{region.slug}/#{node_type.identifier}/wheelchair/unknown", change_frequency: 'daily', priority: 1.0) if Poi.where(node_type_id: node_type.id, region_id: region.id, status: 8).count > 0
        end
      end
    end
  end
end
