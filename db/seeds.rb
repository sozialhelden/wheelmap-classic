# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Category.delete_all
categories = Category.create([
  {:id => 1,  :identifier => :public_transfer},
  {:id => 2,  :identifier => :food},
  {:id => 3,  :identifier => :leisure},
  {:id => 4,  :identifier => :money_post},
  {:id => 5,  :identifier => :education},
  {:id => 6,  :identifier => :shopping},
  {:id => 7,  :identifier => :sport},
  {:id => 8,  :identifier => :tourism},
  {:id => 9,  :identifier => :accommodation},
  {:id => 10, :identifier => :misc},
  {:id => 11, :identifier => :government}  
])



NodeType.delete_all

public_transfer = Category.find_by_identifier('public_transfer')
node_types = NodeType.create([
  {:category => public_transfer, :identifier => :aerodrome,       :osm_key => 'aeroway',  :osm_value => 'aerodrome',      :icon => 'airport.png'},
  {:category => public_transfer, :identifier => :bicycle_rental,  :osm_key => 'amenity',  :osm_value => 'bicycle_rental', :icon => 'cycling.png'},
  {:category => public_transfer, :identifier => :boatyard,        :osm_key => 'waterway', :osm_value => 'boatyard',       :icon => 'boat.png'},
  {:category => public_transfer, :identifier => :bus_station,     :osm_key => 'amenity',  :osm_value => 'bus_station',    :icon => 'bus-stop.png'},
  {:category => public_transfer, :identifier => :bus_stop,        :osm_key => 'highway',  :osm_value => 'bus_stop',       :icon => 'bus-stop.png'},
  {:category => public_transfer, :identifier => :car_rental,      :osm_key => 'amenity',  :osm_value => 'car_rental',     :icon => 'car-rental.png'},
  {:category => public_transfer, :identifier => :car_sharing,     :osm_key => 'amenity',  :osm_value => 'car_sharing',    :icon => 'car-rental.png'},
  {:category => public_transfer, :identifier => :ferry_terminal,  :osm_key => 'amenity',  :osm_value => 'ferry_terminal', :icon => 'ferry.png'},
  {:category => public_transfer, :identifier => :fuel,            :osm_key => 'amenity',  :osm_value => 'fuel',           :icon => 'filling-station.png'},
  {:category => public_transfer, :identifier => :halt,            :osm_key => 'railway',  :osm_value => 'halt',           :icon => 'stop.png'},
  {:category => public_transfer, :identifier => :parking,         :osm_key => 'amenity',  :osm_value => 'parking',        :icon => 'parking.png'},
  {:category => public_transfer, :identifier => :platform,        :osm_key => 'railway',  :osm_value => 'platform',       :icon => 'cctv.png'},
  {:category => public_transfer, :identifier => :station,         :osm_key => 'railway',  :osm_value => 'station',        :icon => 'bus-stop.png'},
  {:category => public_transfer, :identifier => :subway_entrance, :osm_key => 'railway',  :osm_value => 'subway_entrance',:icon => 'subway.png'},
  {:category => public_transfer, :identifier => :terminal,        :osm_key => 'aeroway',  :osm_value => 'terminal',       :icon => 'airport-terminal.png'},
  {:category => public_transfer, :identifier => :tram_stop,       :osm_key => 'railway',  :osm_value => 'tram_stop',      :icon => 'tram.png'}
])

food = Category.find_by_identifier('food')
node_types = NodeType.create([
  {:category => food, :identifier => :cafe,          :osm_key => 'amenity', :osm_value => 'cafe',           :icon => 'coffee.png'},
  {:category => food, :identifier => :bar,           :osm_key => 'amenity', :osm_value => 'bar',            :icon => 'bar.png'},
  {:category => food, :identifier => :drinking_water,:osm_key => 'amenity', :osm_value => 'drinking_water', :icon => 'drinking-water.png'},
  {:category => food, :identifier => :fast_food,     :osm_key => 'amenity', :osm_value => 'fast_food',      :icon => 'fast-food.png'},
  {:category => food, :identifier => :pub,           :osm_key => 'amenity', :osm_value => 'pub',            :icon => 'bar.png'},
])

leisure = Category.find_by_identifier('leisure')
node_types = NodeType.create([
  {:category => leisure,  :identifier => :arena,       :osm_key => 'leisure',  :osm_value => 'arena',       :icon => 'stadium.png'},
  {:category => leisure,  :identifier => :cinema,      :osm_key => 'amenity',  :osm_value => 'cinema',      :icon => 'cinema.png'},
  {:category => leisure,  :identifier => :gallery,     :osm_key => 'amenity',  :osm_value => 'gallery',     :icon => 'art-museum.png'},
  {:category => leisure,  :identifier => :nightclub,   :osm_key => 'amenity',  :osm_value => 'nightclub',   :icon => 'dancing-hall.png'},
  {:category => leisure,  :identifier => :theatre,     :osm_key => 'amenity',  :osm_value => 'theatre',     :icon => 'theatre.png'},
  {:category => leisure,  :identifier => :zoo,         :osm_key => 'tourism',  :osm_value => 'zoo',         :icon => 'zoological-garden.png'}
])

money_post = Category.find_by_identifier('money_post')
node_types = NodeType.create([
  {:category => money_post, :identifier => :atm,              :osm_key => 'amenity',  :osm_value => 'atm',              :icon => 'atm.png'},
  {:category => money_post, :identifier => :bureau_de_change, :osm_key => 'amenity',  :osm_value => 'bureau_de_change', :icon => 'currency-exchange.png'},
  {:category => money_post, :identifier => :bank,             :osm_key => 'amenity',  :osm_value => 'bank',             :icon => 'bank.png'},
  {:category => money_post, :identifier => :post_office,      :osm_key => 'amenity',  :osm_value => 'post_office',      :icon => 'post-office.png'}
])

education = Category.find_by_identifier('education')
node_types = NodeType.create([
  {:category => education,  :identifier => :college,      :osm_key => 'amenity',  :osm_value => 'college',      :icon => 'university.png'},
  {:category => education,  :identifier => :kindergarten, :osm_key => 'amenity',  :osm_value => 'kindergarten', :icon => 'day-care.png'},
  {:category => education,  :identifier => :library,      :osm_key => 'amenity',  :osm_value => 'library',      :icon => 'library.png'},
  {:category => education,  :identifier => :museum,       :osm_key => 'tourism',  :osm_value => 'museum',       :icon => 'art-museum.png'},
  {:category => education,  :identifier => :school,       :osm_key => 'amenity',  :osm_value => 'school',       :icon => 'school.png'},
  {:category => education,  :identifier => :university,   :osm_key => 'amenity',  :osm_value => 'university',   :icon => 'university.png'}
])

shopping = Category.find_by_identifier('shopping')
node_types = NodeType.create([
  {:category => shopping,  :identifier => :alcohol,           :osm_key => 'shop', :osm_value => 'alcohol',          :icon => 'cocktail-bar.png'},
  {:category => shopping,  :identifier => :bakery,            :osm_key => 'shop', :osm_value => 'bakery',           :icon => nil},
  {:category => shopping,  :identifier => :beverages,         :osm_key => 'shop', :osm_value => 'beverages',        :icon => 'cocktail-bar.png'},
  {:category => shopping,  :identifier => :bicycle,           :osm_key => 'shop', :osm_value => 'bicycle',          :icon => 'cycling.png'},
  {:category => shopping,  :identifier => :books,             :osm_key => 'shop', :osm_value => 'books',            :icon => 'library.png'},
  {:category => shopping,  :identifier => :butcher,           :osm_key => 'shop', :osm_value => 'butcher',          :icon => 'butcher.png'},
  {:category => shopping,  :identifier => :clothes,           :osm_key => 'shop', :osm_value => 'clothes',          :icon => 'convenience-store.png'},
  {:category => shopping,  :identifier => :computer,          :osm_key => 'shop', :osm_value => 'computer',         :icon => 'computers.png'},
  {:category => shopping,  :identifier => :convenience,       :osm_key => 'shop', :osm_value => 'convenience',      :icon => 'convenience-store.png'},
  {:category => shopping,  :identifier => :department_store,  :osm_key => 'shop', :osm_value => 'department_store', :icon => 'department-store.png'},
  {:category => shopping,  :identifier => :doityourself,      :osm_key => 'shop', :osm_value => 'doityourself',     :icon => nil},
  {:category => shopping,  :identifier => :dry_cleaning,      :osm_key => 'shop', :osm_value => 'dry_cleaning',     :icon => 'laundromat.png'},
  {:category => shopping,  :identifier => :electronics,       :osm_key => 'shop', :osm_value => 'electronics',      :icon => 'phones.png'},
  {:category => shopping,  :identifier => :florist,           :osm_key => 'shop', :osm_value => 'florist',          :icon => 'flowers.png'},
  {:category => shopping,  :identifier => :furniture,         :osm_key => 'shop', :osm_value => 'furniture',        :icon => 'home-center.png'},
  {:category => shopping,  :identifier => :garden_centre,     :osm_key => 'shop', :osm_value => 'garden_centre',    :icon => 'flowers.png'},
  {:category => shopping,  :identifier => :hairdresser,       :osm_key => 'shop', :osm_value => 'hairdresser',      :icon => 'hair-salon.png'},
  {:category => shopping,  :identifier => :hardware,          :osm_key => 'shop', :osm_value => 'hardware',         :icon => 'hardware.png'},
  {:category => shopping,  :identifier => :laundry,           :osm_key => 'shop', :osm_value => 'laundry',          :icon => 'laundromat.png'},
  {:category => shopping,  :identifier => :mall,              :osm_key => 'shop', :osm_value => 'mall',             :icon => 'convenience-store.png'},
  {:category => shopping,  :identifier => :kiosk,             :osm_key => 'shop', :osm_value => 'kiosk',            :icon => 'kiosk.png'},
  {:category => shopping,  :identifier => :optician,          :osm_key => 'shop', :osm_value => 'optician',         :icon => nil},
  # {:category => shopping,  :identifier => :outdoor,           :osm_key => 'shop', :osm_value => 'outdoor',          :icon => nil},
  {:category => shopping,  :identifier => :shoes,             :osm_key => 'shop', :osm_value => 'shoes',            :icon => 'shoes.png'},
  {:category => shopping,  :identifier => :supermarket,       :osm_key => 'shop', :osm_value => 'supermarket',      :icon => 'supermarket.png'},
])


sport = Category.find_by_identifier('sport')
node_types = NodeType.create([
  {:category => sport,  :identifier => :sports_centre,  :osm_key => 'leisure', :osm_value => 'sports_centre', :icon => 'fitness-center' },
  {:category => sport,  :identifier => :stadium,        :osm_key => 'leisure', :osm_value => 'stadium',       :icon => 'stadium' },
  {:category => sport,  :identifier => :swimming_pool,  :osm_key => 'leisure', :osm_value => 'swimming_pool', :icon => 'swimming' }
])

tourism = Category.find_by_identifier('tourism')
node_types = NodeType.create([
  {:category => tourism,  :identifier => :archaeological_site,  :osm_key => 'historic', :osm_value => 'archaeological_site',  :icon => nil },
  {:category => tourism,  :identifier => :arts_centre,          :osm_key => 'amenity',  :osm_value => 'arts_centre',          :icon => 'art-gallery.png'},
  {:category => tourism,  :identifier => :artwork,              :osm_key => 'amenity',  :osm_value => 'artwork',              :icon => 'art-gallery.png'},
  {:category => tourism,  :identifier => :attraction,           :osm_key => 'tourism',  :osm_value => 'attraction',           :icon => 'art-gallery.png'},
  {:category => tourism,  :identifier => :battlefield,          :osm_key => 'historic', :osm_value => 'battlefield',          :icon => 'battlefield.png'},
  {:category => tourism,  :identifier => :beach,                :osm_key => 'natural',  :osm_value => 'beach',                :icon => 'beach.png'},
  {:category => tourism,  :identifier => :castle,               :osm_key => 'historic', :osm_value => 'castle',               :icon => 'castle.png'},
  {:category => tourism,  :identifier => :cave_entrance,        :osm_key => 'natural',  :osm_value => 'cave_entrance',        :icon => 'cave.png'},
  {:category => tourism,  :identifier => :information,          :osm_key => 'tourism',  :osm_value => 'information',          :icon => 'information.png'},
  {:category => tourism,  :identifier => :memorial,             :osm_key => 'historic', :osm_value => 'memorial',             :icon => 'memorial.png'},
  {:category => tourism,  :identifier => :theme_park,           :osm_key => 'tourism',  :osm_value => 'theme_park',           :icon => 'theme-park.png'},
  {:category => tourism,  :identifier => :viewpoint,            :osm_key => 'tourism',  :osm_value => 'viewpoint',            :icon => 'beautiful-view.png'},
])

accommodation = Category.find_by_identifier('accommodation')
node_types = NodeType.create([
  {:category => accommodation,  :identifier => :beach_resort,         :osm_key => 'leisure',  :osm_value => 'beach_resort',       :icon => 'beach.png'},
  {:category => accommodation,  :identifier => :bed_and_breakfast,    :osm_key => 'tourism',  :osm_value => 'bed_and_breakfast',  :icon => 'motel.png'},
  {:category => accommodation,  :identifier => :camp_site,            :osm_key => 'tourism',  :osm_value => 'camp_site',          :icon => 'camping.png'},
  {:category => accommodation,  :identifier => :caravan_site,         :osm_key => 'tourism',  :osm_value => 'caravan_site',       :icon => 'camping.png'},
  {:category => accommodation,  :identifier => :chalet,               :osm_key => 'tourism',  :osm_value => 'chalet',             :icon => 'motel'},
  {:category => accommodation,  :identifier => :guest_house,          :osm_key => 'tourism',  :osm_value => 'guest_house',        :icon => 'motel'},
  {:category => accommodation,  :identifier => :hostel,               :osm_key => 'tourism',  :osm_value => 'hostel',             :icon => 'motel'},
  {:category => accommodation,  :identifier => :hotel,                :osm_key => 'tourism',  :osm_value => 'hotel',              :icon => 'motel'},
  {:category => accommodation,  :identifier => :motel,                :osm_key => 'tourism',  :osm_value => 'motel',              :icon => 'motel'},
])

misc = Category.find_by_identifier('misc')
node_types = NodeType.create([
  {:category => misc,  :identifier => :doctors,           :osm_key => 'amenity',  :osm_value => 'doctors',          :icon => 'doctor'},
  {:category => misc,  :identifier => :hospital,          :osm_key => 'amenity',  :osm_value => 'hospital',         :icon => 'first-aid'},
  {:category => misc,  :identifier => :pharmacy,          :osm_key => 'amenity',  :osm_value => 'pharmacy',         :icon => 'pharmacy'},
  {:category => misc,  :identifier => :place_of_worship,  :osm_key => 'amenity',  :osm_value => 'place_of_worship', :icon => 'cross'},
  {:category => misc,  :identifier => :toilets,           :osm_key => 'amenity',  :osm_value => 'toilets',          :icon => 'toilets'},
  {:category => misc,  :identifier => :veterinary,        :osm_key => 'amenity',  :osm_value => 'veterinary',       :icon => 'veterinary'}
])

government = Category.find_by_identifier('government')
node_types = NodeType.create([
  {:category => government,  :identifier => :courthouse,      :osm_key => 'amenity',  :osm_value => 'courthouse',       :icon => 'court'},
  {:category => government,  :identifier => :public_building, :osm_key => 'amenity',  :osm_value => 'public_building',  :icon => 'big-city'},
  {:category => government,  :identifier => :townhall,        :osm_key => 'amenity',  :osm_value => 'townhall',         :icon => 'big-city'},
])

