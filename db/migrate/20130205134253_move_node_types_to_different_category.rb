class MoveNodeTypesToDifferentCategory < ActiveRecord::Migration
  def self.up

    # We used the wrong tag
    if community_centre = NodeType.find_by_identifier('community_center')
      community_centre.osm_value = 'community_centre'
      community_centre.alt_osm_key = 'amenity'
      community_centre.alt_osm_value = 'community_center'
      community_centre.save
    end

    if gallery = NodeType.find_by_identifier('gallery')
      gallery.osm_key = 'tourism'
      gallery.alt_osm_key = 'amenity'
      gallery.alt_osm_value = 'gallery'
      gallery.save
    end

    if sports_centre = NodeType.find_by_identifier('sports_centre')
      sports_centre.icon = 'tennis.png'
      sports_centre.save
    end

    if chalet = NodeType.find_by_identifier('chalet')
      chalet.icon = 'home-2.png'
      chalet.save
    end

    if bed_and_breakfast = NodeType.find_by_identifier('chalet')
      bed_and_breakfast.icon = 'bed_breakfast1-2.png'
      bed_and_breakfast.save
    end

    if guest_house = NodeType.find_by_identifier('guest_house')
      guest_house.icon = 'villa.png'
      guest_house.save
    end

    if hostel = NodeType.find_by_identifier('hostel')
      hostel.icon = 'lodging_0star.png'
      hostel.save
    end

    if hotel = NodeType.find_by_identifier('hotel')
      hotel.icon = 'lodging_0star.png'
      hotel.save
    end
  end

  def self.down
  end
end
