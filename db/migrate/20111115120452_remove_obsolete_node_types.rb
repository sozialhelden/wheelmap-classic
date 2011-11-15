class RemoveObsoleteNodeTypes < ActiveRecord::Migration
  def self.up

    # Remove obsolete node types including pois.
    NodeType.where(:osm_key => 'tourism', :osm_value => 'information').first.try(:destroy)
    NodeType.where(:osm_key => 'leisure', :osm_value => 'swimming_pool').first.try(:destroy)
    NodeType.where(:osm_key => 'amenity', :osm_value => 'public_building').first.try(:destroy)
    NodeType.where(:osm_key => 'aeroway', :osm_value => 'aerodrome').first.try(:destroy)

    # Create new category health and with new node types
    health = Category.create(:id => 12, :identifier => :health)
    node_types = NodeType.create([
      {:category => health, :identifier => :medical_supply, :osm_key => 'shop', :osm_value => 'medical_supply', :icon => 'medical_supply.png'},
      {:category => health, :identifier => :hearing_aids, :osm_key => 'shop', :osm_value => 'hearing_aids', :icon => 'hearing_aids.png'},
      {:category => health, :identifier => :social_facility, :osm_key => 'amenity', :osm_value => 'social_facility', :icon => 'social_facility.png'}
    ])

    # Move some node types over to health category
    health.node_types << NodeType.find_by_identifier('doctors')
    health.node_types << NodeType.find_by_identifier('hospital')
    health.node_types << NodeType.find_by_identifier('pharmacy')
    health.node_types << NodeType.find_by_identifier('veterinary')
    health.save

    # Add biergaten to food
    food = Category.find_by_identifier('food')
    node_types = NodeType.create([
      {:category => food, :identifier => :biergarten, :osm_key => 'amenity', :osm_value => 'biergarten', :icon => 'biergarten.png'}
    ])

    # Add biergaten to leisure
    leisure = Category.find_by_identifier('leisure')
    node_types = NodeType.create([
      {:category => leisure, :identifier => :brothel, :osm_key => 'amenity', :osm_value => 'brothel', :icon => 'brothel.png'},
      {:category => leisure, :identifier => :community_center, :osm_key => 'amenity', :osm_value => 'community_center', :icon => 'community_center.png'},
      {:category => leisure, :identifier => :stripclub, :osm_key => 'amenity', :osm_value => 'stripclub', :icon => 'stripclub.png'},
      {:category => leisure, :identifier => :playground, :osm_key => 'leisure', :osm_value => 'playground', :icon => 'playground.png'}
    ])

    transport = Category.find_by_identifier('public_transfer')
    node_types = NodeType.create([
      {:category => transport, :identifier => :cable_car, :osm_key => 'aerialway', :osm_value => 'station', :icon => 'cable_car.png'}
    ])

    government = Category.find_by_identifier('government')
    node_types = NodeType.create([
      {:category => government,  :identifier => :embassy, :osm_key => 'amenity',  :osm_value => 'embassy', :icon => 'embassy.png'},
      {:category => government,  :identifier => :police,  :osm_key => 'amenity',  :osm_value => 'police',  :icon => 'police.png'},
    ])

    sport = Category.find_by_identifier('sport')
    node_types = NodeType.create([
      {:category => sport, :identifier => :swimming_pool, :osm_key => 'amenity', :osm_value => 'swimming_pool', :icon => 'swimming_pool.png'}
    ])

    shopping = Category.find_by_identifier('shopping')
    node_types = NodeType.create([
      {:category => shopping, :identifier => :chemist, :osm_key => 'shop', :osm_value => 'chemist', :icon => 'chemist.png'},
      {:category => shopping, :identifier => :stationery, :osm_key => 'shop', :osm_value => 'stationery', :icon => 'stationery.png'},
      {:category => shopping, :identifier => :video, :osm_key => 'shop', :osm_value => 'video', :icon => 'music.png'},
      {:category => shopping, :identifier => :video, :osm_key => 'shop', :osm_value => 'second_hand', :icon => 'second_hand.png'},
      {:category => shopping, :identifier => :car_shop, :osm_key => 'shop', :osm_value => 'car', :icon => 'car.png'},
      {:category => shopping, :identifier => :car_repair, :osm_key => 'shop', :osm_value => 'car_repair', :icon => 'car_repair.png'},
      {:category => shopping, :identifier => :sports, :osm_key => 'shop', :osm_value => 'sports', :icon => 'weights.png'},
      {:category => shopping, :identifier => :photo, :osm_key => 'shop', :osm_value => 'photo', :icon => 'photography.png'}
    ])

    misc = Category.find_by_identifier('misc')
    node_types = NodeType.create([
      {:category => misc, :identifier => :company, :osm_key => 'office', :osm_value => 'company', :icon => 'workoffice.png'},
      {:category => misc, :identifier => :lawyer, :osm_key => 'office', :osm_value => 'lawyer', :icon => 'court.png'}
    ])

  end

  def self.down
    tourism = Category.find_by_identifier('tourism')
    node_types = NodeType.create([
      {:category => tourism, :identifier => :information, :osm_key => 'tourism', :osm_value => 'information', :icon => 'information.png'}
    ])

    sport = Category.find_by_identifier('sport')
    node_types = NodeType.create([
      {:category => sport,  :identifier => :swimming_pool,  :osm_key => 'leisure', :osm_value => 'swimming_pool', :icon => 'swimming.png' }
    ])

    government = Category.find_by_identifier('government')
    node_types = NodeType.create([
      {:category => government,  :identifier => :public_building, :osm_key => 'amenity',  :osm_value => 'public_building',  :icon => 'bigcity.png'}
    ])

    transport = Category.find_by_identifier('public_transfer')
    node_types = NodeType.create([
      {:category => transport, :identifier => :aerodrome,       :osm_key => 'aeroway',  :osm_value => 'aerodrome',      :icon => 'airport.png'}
    ])
  end
end
