class AddMoreCategories < ActiveRecord::Migration
  def self.up
    if food = Category.find_by_identifier('food')
      NodeType.create(:category => food, :identifier => :ice_cream, :osm_key => 'amenity', :osm_value => 'ice_cream', :icon => 'icecream.png')
    end

    if leisure = Category.find_by_identifier('leisure')
      NodeType.create(:category => leisure, :identifier => :casino, :osm_key => 'amenity', :osm_value => 'casino', :icon => 'poker.png')
    end

    if education = Category.find_by_identifier('education')
      NodeType.create(:category => education, :identifier => :driving_school, :osm_key => 'amenity', :osm_value => 'driving_school', :icon => 'car.png')
    end

    if shopping = Category.find_by_identifier('shopping')
      NodeType.create([
        {:category => shopping, :identifier => :deli,           :osm_key => 'shop', :osm_value => 'deli',           :icon => 'lobster-export.png'},
        {:category => shopping, :identifier => :confectionery,  :osm_key => 'shop', :osm_value => 'confectionery',  :icon => 'targ.png'},
        {:category => shopping, :identifier => :beauty,         :osm_key => 'shop', :osm_value => 'beauty',         :icon => 'beautysalon.png'},
        {:category => shopping, :identifier => :jewelry,        :osm_key => 'shop', :osm_value => 'jewelry',        :icon => 'jewelry.png'},
        {:category => shopping, :identifier => :gift,           :osm_key => 'shop', :osm_value => 'gift',           :icon => 'gifts.png'},
        {:category => shopping, :identifier => :toys,           :osm_key => 'shop', :osm_value => 'toys',           :icon => 'toys.png'},
        {:category => shopping, :identifier => :farm,           :osm_key => 'shop', :osm_value => 'farm',           :icon => 'farmstand.png'},
        {:category => shopping, :identifier => :travel_agency,  :osm_key => 'shop', :osm_value => 'travel_agency',  :icon => 'travel_agency.png'},
        {:category => shopping, :identifier => :outdoor,        :osm_key => 'shop', :osm_value => 'outdoor',        :icon => 'hiking.png'},
        {:category => shopping, :identifier => :organic,        :osm_key => 'shop', :osm_value => 'organic',        :icon => 'restaurant_vegetarian.png'},
        {:category => shopping, :identifier => :pet,            :osm_key => 'shop', :osm_value => 'pet',            :icon => 'cat.png'},
        {:category => shopping, :identifier => :fabric,         :osm_key => 'shop', :osm_value => 'fabric',         :icon => 'textiles.png'}
      ])
    end

    if sport = Category.find_by_identifier('sport')
      NodeType.create(:category => sport, :identifier => :pitch, :osm_key => 'leisure', :osm_value => 'pitch', :icon => 'soccer.png')
    end

    if misc = Category.find_by_identifier('misc')
      NodeType.create([
        {:category => misc,  :identifier => :estate_agent,  :osm_key => 'office',   :osm_value => 'estate_agent', :icon => 'house.png'},
        {:category => misc,  :identifier => :cemetery,      :osm_key => 'landuse',  :osm_value => 'cemetery',     :icon => 'headstone-2.png'},
        {:category => misc,  :identifier => :insurance,     :osm_key => 'office',   :osm_value => 'insurance',    :icon => 'workoffice.png'}
      ])
    end

    if accommodation = Category.find_by_identifier('accommodation')
      NodeType.create(:category => accommodation, :identifier => :dormitory, :osm_key => 'building', :osm_value => 'dormitory', :icon => 'apartment-3.png')
    end

    if health = Category.find_by_identifier('health')
      NodeType.create(:category => health, :identifier => :dentist, :osm_key => 'amenity', :osm_value => 'dentist', :icon => 'dentist.png')
    end

    if government = Category.find_by_identifier('government')
      NodeType.create(:category => government, :identifier => :government, :osm_key => 'office', :osm_value => 'government', :icon => 'office-building.png')
    end


  end

  def self.down
    identifiers_to_delete = [:ice_cream, :casino, :driving_school, :deli, :confectionery, :beauty,
                             :jewelry, :gift, :toys, :farm, :travel_agency, :outdoor, :organic,
                             :pet, :fabric, :pitch, :estate_agent, :cemetery, :insurance, :dormitory,
                             :dentist, :government ]
    NodeType.where(:identifier => identifiers_to_delete).delete_all
  end
end
