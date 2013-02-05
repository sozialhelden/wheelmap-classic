class RemoveOldNodeTypes < ActiveRecord::Migration
  def self.up
    if arena = NodeType.find_by_identifier('arena')
      arena.destroy
    end

    if boatyard = NodeType.find_by_identifier('boatyard')
      boatyard.destroy
    end

    if beach_resort = NodeType.find_by_identifier('beach_resort')
      beach_resort.destroy
    end
  end

  def self.down
    if public_transfer = Category.find_by_identifier('public_transfer')
      unless NodeType.find_by_identifier('boatyard')
        NodeType.create(:category => public_transfer, :identifier => :boatyard, :osm_key => 'waterway', :osm_value => 'boatyard', :icon => 'boat.png')
      end
    end

    if leisure = Category.find_by_identifier('leisure')
      unless NodeType.find_by_identifier('arena')
        NodeType.create(:category => leisure, :identifier => :arena, :osm_key => 'leisure', :osm_value => 'arena', :icon => 'stadium.png')
      end
    end

    if accommodation = Category.find_by_identifier('accommodation')
      unless NodeType.find_by_identifier('beach_resort')
        NodeType.create(:category => leisure, :identifier => :beach_resort, :osm_key => 'leisure', :osm_value => 'beach_resort', :icon => 'beach.png')
      end
    end
  end
end
