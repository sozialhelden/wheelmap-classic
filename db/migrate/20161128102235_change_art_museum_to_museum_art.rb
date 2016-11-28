class ChangeArtMuseumToMuseumArt < ActiveRecord::Migration
  class LocalNodeType < ActiveRecord::Base
    self.table_name = 'node_types'
    validates :identifier, :osm_value, :icon, presence: true
  end

  # Rename art_museum.png to museum_art.png but keep same identifier & osm_value
  def up
    node_type = LocalNodeType.find_by(identifier: 'art', osm_value: 'art', icon: 'art_museum.png')
    unless node_type.nil? && node_type.icon == 'art_museum.png'
      node_type.icon = 'museum_art.png'
      node_type.save
    end
  end

  def down
    node_type = LocalNodeType.find_by(identifier: 'art', osm_value: 'art', icon: 'museum_art.png')
    unless node_type.nil? && node_type.icon == 'museum_art.png'
      node_type.icon = 'art_museum.png'
      node_type.save
    end
  end
end
