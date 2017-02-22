class ChangeCommunityCenterToCommunityCentre < ActiveRecord::Migration
  class LocalNodeType < ActiveRecord::Base
    self.table_name = 'node_types'
    validates :identifier, :osm_value, presence: true
  end
  def up
    node_type = LocalNodeType.find_by_identifier('community_center')
    if node_type.nil?
      return
    else
      node_type.identifier = 'community_centre'
      node_type.osm_value = 'community_centre'
      node_type.save
    end
  end

  def down
    node_type = LocalNodeType.find_by_identifier('community_centre')
    if node_type.nil?
      return
    else
      node_type.identifier = 'community_center'
      node_type.osm_value = 'community_center'
      node_type.save
    end
  end
end
