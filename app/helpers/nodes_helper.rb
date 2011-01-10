module NodesHelper
  
  def node_to_geojson(node)
    return if node.type.blank? || node.category.blank?
    result = { :type => 'Feature',
      :geometry => { :type => 'Point', :coordinates  => [node.lon, node.lat]
      },
      :properties => node.tags.reverse_merge!( 'url' => node.url,
                                          'headline' => node.headline,
                                          'address' => node.address,
                                          'wheelchair' => node.wheelchair,
                                          'osm_id' => node.osm_id,
                                          'type' => node.type,
                                          'category' => node.category,
                                          'icon' => image_path("icons/#{node.icon}")).reject{|k,v| v.blank?}
    }
    result
    
  end

  def nodes_to_geojson(nodes, left, bottom, right, top)
    features = nodes.map{|node| node_to_geojson(node)}.compact
    {:type => 'FeatureCollection', :bbox => [left, bottom, right, top], :features => features}.to_json.html_safe
  end
  
end