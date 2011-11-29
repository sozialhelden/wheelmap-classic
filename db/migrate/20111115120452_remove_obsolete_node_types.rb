class RemoveObsoleteNodeTypes < ActiveRecord::Migration
  def self.up

    # Remove obsolete node types including pois.
    NodeType.where(:osm_key => 'tourism', :osm_value => 'information').first.try(:destroy)
    NodeType.where(:osm_key => 'leisure', :osm_value => 'swimming_pool').first.try(:destroy)
    NodeType.where(:osm_key => 'amenity', :osm_value => 'public_building').first.try(:destroy)
    NodeType.where(:osm_key => 'aeroway', :osm_value => 'aerodrome').first.try(:destroy)
    NodeType.where(:osm_key => 'historic', :osm_value => 'battlefield').first.try(:destroy)

    # Create new category health and with new node types
    health = Category.find_or_create_by_id_and_identifier(12, 'health')
    NodeType.create(:category => health, :identifier => :medical_supply, :osm_key => 'shop', :osm_value => 'medical_supply', :icon => 'medicalstore.png') unless NodeType.find_by_identifier('medical_supply')
    NodeType.create(:category => health, :identifier => :hearing_aids, :osm_key => 'shop', :osm_value => 'hearing_aids', :icon => 'hearing_aids.png') unless NodeType.find_by_identifier('hearing_aids')
    NodeType.create(:category => health, :identifier => :social_facility, :osm_key => 'amenity', :osm_value => 'social_facility', :icon => 'social_facility.png') unless NodeType.find_by_identifier('social_facility')

    # Move some node types over to health category
    health.node_types << NodeType.find_by_identifier('doctors')
    health.node_types << NodeType.find_by_identifier('hospital')
    health.node_types << NodeType.find_by_identifier('pharmacy')
    health.node_types << NodeType.find_by_identifier('veterinary')
    health.save

    # Add biergaten to food
    food = Category.find_by_identifier('food')
    NodeType.create(:category => food, :identifier => :biergarten, :osm_key => 'amenity', :osm_value => 'biergarten', :icon => 'biergarten.png') unless NodeType.find_by_identifier('biergarten')

    # Add  to leisure
    leisure = Category.find_by_identifier('leisure')
    NodeType.create(:category => leisure, :identifier => :brothel, :osm_key => 'amenity', :osm_value => 'brothel', :icon => 'lantern.png') unless NodeType.find_by_identifier('brothel')
    NodeType.create(:category => leisure, :identifier => :community_center, :osm_key => 'amenity', :osm_value => 'community_center', :icon => 'communitycentre.png') unless NodeType.find_by_identifier('community_center')
    NodeType.create(:category => leisure, :identifier => :stripclub, :osm_key => 'amenity', :osm_value => 'stripclub', :icon => 'stripclub.png') unless NodeType.find_by_identifier('stripclub')
    NodeType.create(:category => leisure, :identifier => :playground, :osm_key => 'leisure', :osm_value => 'playground', :icon => 'playground.png') unless NodeType.find_by_identifier('playground')

    transport = Category.find_by_identifier('public_transfer')
    NodeType.create(:category => transport, :identifier => :cable_car, :osm_key => 'aerialway', :osm_value => 'station', :icon => 'cablecar.png') unless NodeType.find_by_identifier('cable_car')

    government = Category.find_by_identifier('government')
    NodeType.create(:category => government,  :identifier => :embassy, :osm_key => 'amenity',  :osm_value => 'embassy', :icon => 'embassy.png') unless NodeType.find_by_identifier('embassy')
    NodeType.create(:category => government,  :identifier => :police,  :osm_key => 'amenity',  :osm_value => 'police',  :icon => 'police.png') unless NodeType.find_by_identifier('police')

    sport = Category.find_by_identifier('sport')
    NodeType.create(:category => sport, :identifier => :swimming_pool, :osm_key => 'amenity', :osm_value => 'swimming_pool', :icon => 'swimming.png') unless NodeType.find_by_identifier('swimming_pool')

    shopping = Category.find_by_identifier('shopping')
    NodeType.create(:category => shopping, :identifier => :chemist, :osm_key => 'shop', :osm_value => 'chemist', :icon => 'chemist.png') unless NodeType.find_by_identifier('chemist')
    NodeType.create(:category => shopping, :identifier => :stationery, :osm_key => 'shop', :osm_value => 'stationery', :icon => 'stationery.png') unless NodeType.find_by_identifier('stationery')
    NodeType.create(:category => shopping, :identifier => :video, :osm_key => 'shop', :osm_value => 'video', :icon => 'music.png') unless NodeType.find_by_identifier('video')
    NodeType.create(:category => shopping, :identifier => :second_hand, :osm_key => 'shop', :osm_value => 'second_hand', :icon => '2hand.png') unless NodeType.find_by_identifier('second_hand')
    NodeType.create(:category => shopping, :identifier => :car_shop, :osm_key => 'shop', :osm_value => 'car', :icon => 'car.png') unless NodeType.find_by_identifier('car_shop')
    NodeType.create(:category => shopping, :identifier => :car_repair, :osm_key => 'shop', :osm_value => 'car_repair', :icon => 'car_repair.png') unless NodeType.find_by_identifier('car_repair')
    NodeType.create(:category => shopping, :identifier => :sports, :osm_key => 'shop', :osm_value => 'sports', :icon => 'weights.png') unless NodeType.find_by_identifier('sports')
    NodeType.create(:category => shopping, :identifier => :photo, :osm_key => 'shop', :osm_value => 'photo', :icon => 'photography.png') unless NodeType.find_by_identifier('photo')

    misc = Category.find_by_identifier('misc')
    NodeType.create(:category => misc, :identifier => :company, :osm_key => 'office', :osm_value => 'company', :icon => 'workoffice.png') unless NodeType.find_by_identifier('company')
    NodeType.create(:category => misc, :identifier => :lawyer, :osm_key => 'office', :osm_value => 'lawyer', :icon => 'court.png') unless NodeType.find_by_identifier('lawyer')

    n =  NodeType.where(:osm_key => 'historic', :osm_value => 'archaeological_site').first
    n.icon = 'fossils.png'
    n.save

  end

  def self.down
    tourism = Category.find_by_identifier('tourism')
    node_types = NodeType.create([
      {:category => tourism, :identifier => :information, :osm_key => 'tourism',  :osm_value => 'information', :icon => 'information.png'},
      {:category => tourism, :identifier => :battlefield, :osm_key => 'historic', :osm_value => 'battlefield', :icon => 'battlefield.png'}
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
