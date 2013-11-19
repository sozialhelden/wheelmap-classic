class AddNewNodeTypes < ActiveRecord::Migration
  def self.up
    food = Category.find_by_identifier('food')
    NodeType.create(:category => food,  :identifier => :ice_cream, :osm_key => 'amenity', :osm_value => 'ice_cream', :icon => 'icecream.png') unless NodeType.find_by_identifier('ice_cream')

    leisure = Category.find_by_identifier('leisure')
    NodeType.create(:category => leisure,  :identifier => :casino, :osm_key => 'amenity', :osm_value => 'casino', :icon => 'poker.png') unless NodeType.find_by_identifier('casino')
    NodeType.where(:osm_key => 'amenity', :osm_value => 'gallery').update_all(:osm_key => 'tourism', :osm_value => 'gallery', :alt_osm_key => 'amenity', :alt_osm_value => 'gallery')

    education = Category.find_by_identifier('education')
    NodeType.create(:category => education, :identifier => :driving_school, :osm_key => 'amenity', :osm_value => 'driving_school', :icon => 'car.png') unless NodeType.find_by_identifier('driving_school')

    shopping = Category.find_by_identifier('shopping')
    NodeType.create(:category => shopping, :identifier => :deli, :osm_key => 'shop', :osm_value => 'deli', :icon => 'lobster-export.png') unless NodeType.find_by_identifier('deli')
    NodeType.create(:category => shopping, :identifier => :confectionery, :osm_key => 'shop', :osm_value => 'confectionery', :icon => 'targ.png') unless NodeType.find_by_identifier('confectionery')
    NodeType.create(:category => shopping, :identifier => :beauty, :osm_key => 'shop', :osm_value => 'beauty', :icon => 'beautysalon.png') unless NodeType.find_by_identifier('beauty')
    NodeType.create(:category => shopping, :identifier => :jewelry, :osm_key => 'shop', :osm_value => 'jewelry', :icon => 'jewelry.png') unless NodeType.find_by_identifier('jewelry')
    NodeType.create(:category => shopping, :identifier => :gift, :osm_key => 'shop', :osm_value => 'gift', :icon => 'gifts.png') unless NodeType.find_by_identifier('gift')
    NodeType.create(:category => shopping, :identifier => :toys, :osm_key => 'shop', :osm_value => 'toys', :icon => 'toys.png') unless NodeType.find_by_identifier('toys')
    NodeType.create(:category => shopping, :identifier => :travel_agency, :osm_key => 'shop', :osm_value => 'travel_agency', :icon => 'travel_agency.png') unless NodeType.find_by_identifier('travel_agency')
    NodeType.create(:category => shopping, :identifier => :outdoor, :osm_key => 'shop', :osm_value => 'outdoor', :icon => 'hiking.png') unless NodeType.find_by_identifier('outdoor')
    NodeType.create(:category => shopping, :identifier => :organic, :osm_key => 'shop', :osm_value => 'organic', :icon => 'restaurant_vegetarian.png') unless NodeType.find_by_identifier('organic')
    NodeType.create(:category => shopping, :identifier => :pet, :osm_key => 'shop', :osm_value => 'pet', :icon => 'cat.png') unless NodeType.find_by_identifier('pet')
    NodeType.create(:category => shopping, :identifier => :fabric, :osm_key => 'shop', :osm_value => 'fabric', :icon => 'textiles.png') unless NodeType.find_by_identifier('fabric')

    sport = Category.find_by_identifier('sport')
    NodeType.create(:category => sport, :identifier => :pitch, :osm_key => 'leisure', :osm_value => 'pitch', :icon => 'soccer.png') unless NodeType.find_by_identifier('pitch')
    NodeType.where(:osm_key => 'leisure', :osm_value => 'sports_centre').update_all(:icon => 'tennis.png')

    misc = Category.find_by_identifier('misc')
    NodeType.create(:category => misc, :identifier => :estate_agent, :osm_key => 'office', :osm_value => 'estate_agent', :icon => 'house.png') unless NodeType.find_by_identifier('estate_agent')
    NodeType.create(:category => misc, :identifier => :insurance, :osm_key => 'office', :osm_value => 'insurance', :icon => 'workoffice.png') unless NodeType.find_by_identifier('insurance')

    accommodation = Category.find_by_identifier('accommodation')
    NodeType.create(:category => accommodation, :identifier => :dormitory, :osm_key => 'building', :osm_value => 'dormitory', :icon => 'apartment.png') unless NodeType.find_by_identifier('dormitory')

    NodeType.where(:osm_key => 'tourism', :osm_value => 'bed_and_breakfast').update_all(:icon => 'bed_breakfast1.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'hotel').update_all(:icon => 'lodging_0star.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'motel').update_all(:icon => 'lodging_0star.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'hostel').update_all(:icon => 'lodging_0star.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'guest_house').update_all(:icon => 'villa.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'chalet').update_all(:icon => 'home.png')

    NodeType.find_by_identifier('beach_resort').try(:destroy)

    health = Category.find_by_identifier('health')
    NodeType.create(:category => health, :identifier => :dentist, :osm_key => 'amenity', :osm_value => 'dentist', :icon => 'dentist.png') unless NodeType.find_by_identifier('dentist')

    government = Category.find_by_identifier('government')
    NodeType.create(:category => government, :identifier => :government, :osm_key => 'office', :osm_value => 'government', :icon => 'office-building.png') unless NodeType.find_by_identifier('government')
  end

  def self.down
    NodeType.find_by_identifier('government').try(:destroy)
    NodeType.find_by_identifier('dentist').try(:destroy)

    accommodation = Category.find_by_identifier('accommodation')
    NodeType.create(:category => accommodation,  :identifier => :beach_resort, :osm_key => 'leisure', :osm_value => 'beach_resort', :icon => 'beach.png') unless NodeType.find_by_identifier('beach_resort')

    NodeType.find_by_identifier('dormitory').try(:destroy)
    NodeType.find_by_identifier('insurance').try(:destroy)
    NodeType.find_by_identifier('estate_agent').try(:destroy)
    NodeType.find_by_identifier('pitch').try(:destroy)
    NodeType.find_by_identifier('fabric').try(:destroy)
    NodeType.find_by_identifier('pet').try(:destroy)
    NodeType.find_by_identifier('organic').try(:destroy)
    NodeType.find_by_identifier('outdoor').try(:destroy)
    NodeType.find_by_identifier('travel_agency').try(:destroy)
    NodeType.find_by_identifier('toys').try(:destroy)
    NodeType.find_by_identifier('gift').try(:destroy)
    NodeType.find_by_identifier('jewelry').try(:destroy)
    NodeType.find_by_identifier('beauty').try(:destroy)
    NodeType.find_by_identifier('confectionery').try(:destroy)
    NodeType.find_by_identifier('deli').try(:destroy)
    NodeType.find_by_identifier('driving_school').try(:destroy)
    NodeType.find_by_identifier('casino').try(:destroy)
    NodeType.find_by_identifier('ice_cream').try(:destroy)
    NodeType.where(:osm_key => 'tourism', :osm_value => 'gallery').update_all(:osm_key => 'amenity', :osm_value => 'gallery', :alt_osm_key => nil, :alt_osm_value => nil)
    NodeType.where(:osm_key => 'leisure', :osm_value => 'sports_centre').update_all(:icon => 'fitness.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'hotel').update_all(:icon => 'motel.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'motel').update_all(:icon => 'motel.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'hostel').update_all(:icon => 'motel.png')
    NodeType.where(:osm_key => 'tourism', :osm_value => 'guest_house').update_all(:icon => 'motel.png')
  end
end
