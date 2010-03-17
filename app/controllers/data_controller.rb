require 'OSM/API'
require 'OSM/Database'

class DataController < ApplicationController

  caches_page :data

  def data
    data = []
    db = osm.get_bbox(*params[:bbox].first.split(',').map{ |val| val.to_f })
    db.nodes.values.each do |node|
      tags = node.tags.symbolize_keys
      if tags[:name] and (tags[:amenity] or tags[:railway] == 'station')
        #info = node.tags.map{ |key, value| "#{key}: #{value}" }.join("; ")
        data << {
          :lat => node.lat,
          :lon => node.lon,
          :name => tags[:name],
          :wheelchair => tags[:wheelchair] || 'unknown',
          :type => tags[:station],
          :tags => tags,
          :amenity => (tags[:amenity] || tags[:station] || '').gsub(' ', '-')
        }
      end
    end
    render :json => data
  end

private

  def osm
    @osm || OSM::API.new
  end

end
