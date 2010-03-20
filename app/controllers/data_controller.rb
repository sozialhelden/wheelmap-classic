require 'net/http'
require 'xmlsimple'

class DataController < ApplicationController

  def data
    places = []
    xml_data = Net::HTTP.get_response(URI.parse(osm_url)).body
    osm_data = XmlSimple.xml_in(xml_data)

    if nodes = osm_data['node']
      nodes.each do |node|
        if tags = clean_up_tags(parse_tags(node))
          if valid_type?(tags)
            places << {
              :id => node['id'],
              :lat => node['lat'].to_f,
              :lon => node['lon'].to_f,
              :name => tags['name'],
              :wheelchair => wheelchair(tags),
              :tags => tags,
              :type => type(tags)
            }
          end
        end
      end
    end

    render :json => places
  end

private

  def valid_type?(tags)
    tags['amenity'] or
    tags['railway'] == 'station' or
    tags['railway'] == 'tram_stop' or
    tags['highway'] == 'bus_stop'
  end

  def osm_url
    "http://osmxapi.hypercube.telascience.org/api/0.6/node" +
    escape_osm_option(:bbox => params[:bbox]) +
    escape_osm_option(%w(amenity railway highway ferry))
  end

  def parse_tags(node)
    returning({}) do |tags|
      if node['tag'].is_a?(Array)
        node['tag'].each do |tag|
          tags[tag["k"]] = tag["v"]
        end
      end
    end
  end

  def clean_up_tags(tags)
    returning tags do |tags|
      tags['station'] = 'subway' if tags['hvv:psv_type'] == 'U'
      tags['station'] = 'light-rail' if tags['hvv:psv_type'] == 'S'
      tags['amenity'] = 'ferry-terminal' if tags['ferry'] == 'halt'
    end
  end

  def escape_osm_option(option)
    if option.is_a?(Array)
      # [value1|value2|value3]
      '%5B' + option.join('%7C') + '%5D'
    else
      option.map do |key, value|
        # [key=value]
        '%5B' + key.to_s + '%3D' + value.to_s + '%5D'
      end.join
    end
  end

  def type(tags)
    (tags['amenity'] || tags['station'] || tags['railway'] || tags['highway'] || '').gsub(/ |_/, '-')
  end

  def wheelchair(tags)
    tags['wheelchair'] || tags['hvv:barrier_free'] || 'unknown'
  end

end
