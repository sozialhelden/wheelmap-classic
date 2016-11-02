# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ :name => 'Chicago' }, { :name => 'Copenhagen' }])
#   Mayor.create(:name => 'Daley', :city => cities.first)

Category.delete_all
Category.connection.execute('ALTER TABLE categories AUTO_INCREMENT=1')

Category.create([
  {id: 1,  identifier: :public_transfer},
  {id: 2,  identifier: :food},
  {id: 3,  identifier: :leisure},
  {id: 4,  identifier: :money_post},
  {id: 5,  identifier: :education},
  {id: 6,  identifier: :shopping},
  {id: 7,  identifier: :sport},
  {id: 8,  identifier: :tourism},
  {id: 9,  identifier: :accommodation},
  {id: 10, identifier: :misc},
  {id: 11, identifier: :government},
  {id: 12, identifier: :health},
])

NodeType.delete_all
NodeType.connection.execute('ALTER TABLE node_types AUTO_INCREMENT=1')

public_transfer = Category.find_by_identifier('public_transfer')
NodeType.create([
  {category: public_transfer, identifier: :bicycle_rental,  osm_key: 'amenity',   osm_value: 'bicycle_rental', icon: 'cycling.png'},
  {category: public_transfer, identifier: :boatyard,        osm_key: 'waterway',  osm_value: 'boatyard',       icon: 'boat.png'},
  {category: public_transfer, identifier: :bus_station,     osm_key: 'amenity',   osm_value: 'bus_station',    icon: 'busstop.png'},
  {category: public_transfer, identifier: :bus_stop,        osm_key: 'highway',   osm_value: 'bus_stop',       icon: 'busstop.png'},
  {category: public_transfer, identifier: :cable_car,       osm_key: 'aerialway', osm_value: 'station',        icon: 'cablecar.png'},
  {category: public_transfer, identifier: :car_rental,      osm_key: 'amenity',   osm_value: 'car_rental',     icon: 'carrental.png'},
  {category: public_transfer, identifier: :car_sharing,     osm_key: 'amenity',   osm_value: 'car_sharing',    icon: 'carrental.png'},
  {category: public_transfer, identifier: :ferry_terminal,  osm_key: 'amenity',   osm_value: 'ferry_terminal', icon: 'ferry.png'},
  {category: public_transfer, identifier: :fuel,            osm_key: 'amenity',   osm_value: 'fuel',           icon: 'fillingstation.png'},
  {category: public_transfer, identifier: :halt,            osm_key: 'railway',   osm_value: 'halt',           icon: 'train.png'},
  {category: public_transfer, identifier: :parking,         osm_key: 'amenity',   osm_value: 'parking',        icon: 'parking.png'},
  {category: public_transfer, identifier: :platform,        osm_key: 'railway',   osm_value: 'platform',       icon: 'train.png'},
  {category: public_transfer, identifier: :station,         osm_key: 'railway',   osm_value: 'station',        icon: 'train.png'},
  {category: public_transfer, identifier: :subway_entrance, osm_key: 'railway',   osm_value: 'subway_entrance',icon: 'underground.png'},
  {category: public_transfer, identifier: :terminal,        osm_key: 'aeroway',   osm_value: 'terminal',       icon: 'airport_terminal.png'},
  {category: public_transfer, identifier: :tram_stop,       osm_key: 'railway',   osm_value: 'tram_stop',      icon: 'tramway.png'},
])

food = Category.find_by_identifier('food')
NodeType.create([
  {category: food, identifier: :bar,           osm_key: 'amenity', osm_value: 'bar',            icon: 'bar_coktail.png'},
  {category: food, identifier: :biergarten,    osm_key: 'amenity', osm_value: 'biergarten',     icon: 'biergarten.png'},
  {category: food, identifier: :cafe,          osm_key: 'amenity', osm_value: 'cafe',           icon: 'coffee.png'},
  {category: food, identifier: :drinking_water,osm_key: 'amenity', osm_value: 'drinking_water', icon: 'drinkingwater.png'},
  {category: food, identifier: :fast_food,     osm_key: 'amenity', osm_value: 'fast_food',      icon: 'fastfood.png'},
  {category: food, identifier: :ice_cream,     osm_key: 'amenity', osm_value: 'ice_cream',      icon: 'icecream.png'},
  {category: food, identifier: :pub,           osm_key: 'amenity', osm_value: 'pub',            icon: 'bar.png'},
  {category: food, identifier: :restaurant,    osm_key: 'amenity', osm_value: 'restaurant',     icon: 'restaurant.png'},
])

leisure = Category.find_by_identifier('leisure')
NodeType.create([
  {category: leisure, identifier: :arena,            osm_key: 'leisure', osm_value: 'arena',            icon: 'stadium.png'},
  {category: leisure, identifier: :brothel,          osm_key: 'amenity', osm_value: 'brothel',          icon: 'lantern.png'},
  {category: leisure, identifier: :casino,           osm_key: 'amenity', osm_value: 'casino',           icon: 'poker.png'},
  {category: leisure, identifier: :cinema,           osm_key: 'amenity', osm_value: 'cinema',           icon: 'cinema.png'},
  {category: leisure, identifier: :community_centre, osm_key: 'amenity', osm_value: 'community_centre', icon: 'communitycentre.png'},
  {category: leisure, identifier: :gallery,          osm_key: 'tourism', osm_value: 'gallery',          icon: 'museum_art.png', :alt_osm_key => 'amenity', :alt_osm_value => 'gallery'},
  {category: leisure, identifier: :massage,          osm_key: 'shop',    osm_value: 'massage',          icon: 'massage.png'},
  {category: leisure, identifier: :nightclub,        osm_key: 'amenity', osm_value: 'nightclub',        icon: 'dancinghall.png'},
  {category: leisure, identifier: :playground,       osm_key: 'leisure', osm_value: 'playground',       icon: 'playground.png'},
  {category: leisure, identifier: :sauna,            osm_key: 'leisure', osm_value: 'sauna',            icon: 'spa.png'},
  {category: leisure, identifier: :stripclub,        osm_key: 'amenity', osm_value: 'stripclub',        icon: 'stripclub.png'},
  {category: leisure, identifier: :tattoo,           osm_key: 'shop',    osm_value: 'tattoo',           icon: 'naval_museum.png'},
  {category: leisure, identifier: :theatre,          osm_key: 'amenity', osm_value: 'theatre',          icon: 'theater.png'},
  {category: leisure, identifier: :zoo,              osm_key: 'tourism', osm_value: 'zoo',              icon: 'zoo.png'},
])

money_post = Category.find_by_identifier('money_post')
NodeType.create([
  {category: money_post, identifier: :atm,              osm_key: 'amenity',  osm_value: 'atm',              icon: 'atm.png'},
  {category: money_post, identifier: :bank,             osm_key: 'amenity',  osm_value: 'bank',             icon: 'bank.png'},
  {category: money_post, identifier: :bureau_de_change, osm_key: 'amenity',  osm_value: 'bureau_de_change', icon: 'currencyexchange.png'},
  {category: money_post, identifier: :post_office,      osm_key: 'amenity',  osm_value: 'post_office',      icon: 'postal.png'},
])

education = Category.find_by_identifier('education')
NodeType.create([
  {category: education, identifier: :college,        osm_key: 'amenity', osm_value: 'college',        icon: 'university.png'},
  {category: education, identifier: :driving_school, osm_key: 'amenity', osm_value: 'driving_school', icon: 'car.png'},
  {category: education, identifier: :kindergarten,   osm_key: 'amenity', osm_value: 'kindergarten',   icon: 'daycare.png'},
  {category: education, identifier: :library,        osm_key: 'amenity', osm_value: 'library',        icon: 'library.png'},
  {category: education, identifier: :museum,         osm_key: 'tourism', osm_value: 'museum',         icon: 'museum_archeological.png'},
  {category: education, identifier: :school,         osm_key: 'amenity', osm_value: 'school',         icon: 'school.png'},
  {category: education, identifier: :university,     osm_key: 'amenity', osm_value: 'university',     icon: 'university.png'},
])

shopping = Category.find_by_identifier('shopping')
NodeType.create([
  {category: shopping, identifier: :alcohol,          osm_key: 'shop',    osm_value: 'alcohol',          icon: 'liquor.png'},
  {category: shopping, identifier: :bakery,           osm_key: 'shop',    osm_value: 'bakery',           icon: 'bread.png'},
  {category: shopping, identifier: :beauty,           osm_key: 'shop',    osm_value: 'beauty',           icon: 'beautysalon.png'},
  {category: shopping, identifier: :beverages,        osm_key: 'shop',    osm_value: 'beverages',        icon: 'liquor.png'},
  {category: shopping, identifier: :bicycle,          osm_key: 'shop',    osm_value: 'bicycle',          icon: 'cycling.png'},
  {category: shopping, identifier: :books,            osm_key: 'shop',    osm_value: 'books',            icon: 'library.png'},
  {category: shopping, identifier: :butcher,          osm_key: 'shop',    osm_value: 'butcher',          icon: 'butcher.png'},
  {category: shopping, identifier: :car_repair,       osm_key: 'shop',    osm_value: 'car_repair',       icon: 'car_repair.png'},
  {category: shopping, identifier: :car_shop,         osm_key: 'shop',    osm_value: 'car',              icon: 'car.png'},
  {category: shopping, identifier: :chemist,          osm_key: 'shop',    osm_value: 'chemist',          icon: 'chemist.png'},
  {category: shopping, identifier: :clothes,          osm_key: 'shop',    osm_value: 'clothes',          icon: 'clothers_male.png'},
  {category: shopping, identifier: :computer,         osm_key: 'shop',    osm_value: 'computer',         icon: 'computers.png'},
  {category: shopping, identifier: :confectionery,    osm_key: 'shop',    osm_value: 'confectionery',    icon: 'targ.png'},
  {category: shopping, identifier: :convenience,      osm_key: 'shop',    osm_value: 'convenience',      icon: 'conveniencestore.png'},
  {category: shopping, identifier: :deli,             osm_key: 'shop',    osm_value: 'deli',             icon: 'lobster-export.png'},
  {category: shopping, identifier: :department_store, osm_key: 'shop',    osm_value: 'department_store', icon: 'departmentstore.png'},
  {category: shopping, identifier: :doityourself,     osm_key: 'shop',    osm_value: 'doityourself',     icon: 'tools.png'},
  {category: shopping, identifier: :dry_cleaning,     osm_key: 'shop',    osm_value: 'dry_cleaning',     icon: 'laundromat.png'},
  {category: shopping, identifier: :electronics,      osm_key: 'shop',    osm_value: 'electronics',      icon: 'phones.png'},
  {category: shopping, identifier: :fabric,           osm_key: 'shop',    osm_value: 'fabric',           icon: 'textiles.png'},
  {category: shopping, identifier: :florist,          osm_key: 'shop',    osm_value: 'florist',          icon: 'flowers.png'},
  {category: shopping, identifier: :furniture,        osm_key: 'shop',    osm_value: 'furniture',        icon: 'homecenter.png'},
  {category: shopping, identifier: :garden_centre,    osm_key: 'shop',    osm_value: 'garden_centre',    icon: 'flowers.png'},
  {category: shopping, identifier: :gift,             osm_key: 'shop',    osm_value: 'gift',             icon: 'gifts.png'},
  {category: shopping, identifier: :hairdresser,      osm_key: 'shop',    osm_value: 'hairdresser',      icon: 'barber.png'},
  {category: shopping, identifier: :hardware,         osm_key: 'shop',    osm_value: 'hardware',         icon: 'tools.png'},
  {category: shopping, identifier: :jewelry,          osm_key: 'shop',    osm_value: 'jewelry',          icon: 'jewelry.png'},
  {category: shopping, identifier: :kiosk,            osm_key: 'shop',    osm_value: 'kiosk',            icon: 'kiosk.png'},
  {category: shopping, identifier: :laundry,          osm_key: 'shop',    osm_value: 'laundry',          icon: 'laundromat.png'},
  {category: shopping, identifier: :mall,             osm_key: 'shop',    osm_value: 'mall',             icon: 'mall.png'},
  {category: shopping, identifier: :optician,         osm_key: 'shop',    osm_value: 'optician',         icon: 'ophthalmologist.png'},
  {category: shopping, identifier: :organic,          osm_key: 'shop',    osm_value: 'organic',          icon: 'restaurant_vegetarian.png'},
  {category: shopping, identifier: :outdoor,          osm_key: 'shop',    osm_value: 'outdoor',          icon: 'hiking.png'},
  {category: shopping, identifier: :pet,              osm_key: 'shop',    osm_value: 'pet',              icon: 'cat.png'},
  {category: shopping, identifier: :photo,            osm_key: 'shop',    osm_value: 'photo',            icon: 'photography.png'},
  {category: shopping, identifier: :second_hand,      osm_key: 'shop',    osm_value: 'second_hand',      icon: '2hand.png'},
  {category: shopping, identifier: :shoes,            osm_key: 'shop',    osm_value: 'shoes',            icon: 'shoes.png'},
  {category: shopping, identifier: :sports,           osm_key: 'shop',    osm_value: 'sports',           icon: 'weights.png'},
  {category: shopping, identifier: :stationery,       osm_key: 'shop',    osm_value: 'stationery',       icon: 'stationery.png'},
  {category: shopping, identifier: :supermarket,      osm_key: 'shop',    osm_value: 'supermarket',      icon: 'supermarket.png'},
  {category: shopping, identifier: :toys,             osm_key: 'shop',    osm_value: 'toys',             icon: 'toys.png'},
  {category: shopping, identifier: :travel_agency,    osm_key: 'shop',    osm_value: 'travel_agency',    icon: 'travel_agency.png'},
  {category: shopping, identifier: :video,            osm_key: 'shop',    osm_value: 'video',            icon: 'music.png'},
])

sport = Category.find_by_identifier('sport')
NodeType.create([
  {category: sport, identifier: :pitch,         osm_key: 'leisure', osm_value: 'pitch',         icon: 'soccer.png'},
  {category: sport, identifier: :sports_centre, osm_key: 'leisure', osm_value: 'sports_centre', icon: 'tennis.png' },
  {category: sport, identifier: :stadium,       osm_key: 'leisure', osm_value: 'stadium',       icon: 'stadium.png' },
  {category: sport, identifier: :swimming_pool, osm_key: 'amenity', osm_value: 'swimming_pool', icon: 'swimming.png'},
])

tourism = Category.find_by_identifier('tourism')
NodeType.create([
  {category: tourism, identifier: :archaeological_site, osm_key: 'historic', osm_value: 'archaeological_site', icon: 'fossils.png' },
  {category: tourism, identifier: :arts_centre,         osm_key: 'amenity',  osm_value: 'arts_centre',         icon: 'artgallery.png'},
  {category: tourism, identifier: :artwork,             osm_key: 'amenity',  osm_value: 'artwork',             icon: 'publicart.png'},
  {category: tourism, identifier: :attraction,          osm_key: 'tourism',  osm_value: 'attraction',          icon: 'artgallery.png'},
  {category: tourism, identifier: :beach,               osm_key: 'natural',  osm_value: 'beach',               icon: 'beach.png'},
  {category: tourism, identifier: :castle,              osm_key: 'historic', osm_value: 'castle',              icon: 'castle.png'},
  {category: tourism, identifier: :cave_entrance,       osm_key: 'natural',  osm_value: 'cave_entrance',       icon: 'cave.png'},
  {category: tourism, identifier: :memorial,            osm_key: 'historic', osm_value: 'memorial',            icon: 'memorial.png'},
  {category: tourism, identifier: :theme_park,          osm_key: 'tourism',  osm_value: 'theme_park',          icon: 'themepark.png'},
  {category: tourism, identifier: :viewpoint,           osm_key: 'tourism',  osm_value: 'viewpoint',           icon: 'beautifulview.png'},
])

accommodation = Category.find_by_identifier('accommodation')
NodeType.create([
  {category: accommodation, identifier: :bed_and_breakfast, osm_key: 'tourism',  osm_value: 'bed_and_breakfast', icon: 'bed_breakfast1.png'},
  {category: accommodation, identifier: :camp_site,         osm_key: 'tourism',  osm_value: 'camp_site',         icon: 'camping.png'},
  {category: accommodation, identifier: :caravan_site,      osm_key: 'tourism',  osm_value: 'caravan_site',      icon: 'camping.png'},
  {category: accommodation, identifier: :chalet,            osm_key: 'tourism',  osm_value: 'chalet',            icon: 'home.png'},
  {category: accommodation, identifier: :dormitory,         osm_key: 'building', osm_value: 'dormitory',         icon: 'apartment.png'},
  {category: accommodation, identifier: :guest_house,       osm_key: 'tourism',  osm_value: 'guest_house',       icon: 'villa.png'},
  {category: accommodation, identifier: :hostel,            osm_key: 'tourism',  osm_value: 'hostel',            icon: 'lodging_0star.png'},
  {category: accommodation, identifier: :hotel,             osm_key: 'tourism',  osm_value: 'hotel',             icon: 'lodging_0star.png'},
  {category: accommodation, identifier: :motel,             osm_key: 'tourism',  osm_value: 'motel',             icon: 'lodging_0star.png'},
])

misc = Category.find_by_identifier('misc')
NodeType.create([
  {category: misc, identifier: :company,          osm_key: 'office',   osm_value: 'company',          icon: 'workoffice.png'},
  {category: misc, identifier: :estate_agent,     osm_key: 'office',   osm_value: 'estate_agent',     icon: 'house.png'},
  {category: misc, identifier: :insurance,        osm_key: 'office',   osm_value: 'insurance',        icon: 'workoffice.png'},
  {category: misc, identifier: :lawyer,           osm_key: 'office',   osm_value: 'lawyer',           icon: 'court.png'},
  {category: misc, identifier: :place_of_worship, osm_key: 'amenity',  osm_value: 'place_of_worship', icon: 'prayer.png'},
  {category: misc, identifier: :toilets,          osm_key: 'amenity',  osm_value: 'toilets',          icon: 'toilets.png'},
])

government = Category.find_by_identifier('government')
NodeType.create([
  {category: government, identifier: :courthouse, osm_key: 'amenity',  osm_value: 'courthouse', icon: 'court.png'},
  {category: government, identifier: :townhall,   osm_key: 'amenity',  osm_value: 'townhall',   icon: 'bigcity.png'},
  {category: government, identifier: :embassy,    osm_key: 'amenity',  osm_value: 'embassy',    icon: 'embassy.png'},
  {category: government, identifier: :police,     osm_key: 'amenity',  osm_value: 'police',     icon: 'police.png'},
  {category: government, identifier: :government, osm_key: 'office',   osm_value: 'government', icon: 'office-building.png'},
])

health = Category.find_by_identifier('health')
NodeType.create([
  {category: health, identifier: :alternative,            osm_key: 'healthcare', osm_value: 'alternative',            icon: 'yin_yang.png'},
  {category: health, identifier: :dentist,                osm_key: 'amenity',    osm_value: 'dentist',                icon: 'dentist.png'},
  {category: health, identifier: :doctors,                osm_key: 'amenity',    osm_value: 'doctors',                icon: 'medicine.png'},
  {category: health, identifier: :hearing_aids,           osm_key: 'shop',       osm_value: 'hearing_aids',           icon: 'hearing_aids.png'},
  {category: health, identifier: :hospital,               osm_key: 'amenity',    osm_value: 'hospital',               icon: 'firstaid.png'},
  {category: health, identifier: :medical_supply,         osm_key: 'shop',       osm_value: 'medical_supply',         icon: 'medicalstore.png'},
  {category: health, identifier: :occupational_therapist, osm_key: 'healthcare', osm_value: 'occupational_therapist', icon: 'theft.png'},
  {category: health, identifier: :pharmacy,               osm_key: 'amenity',    osm_value: 'pharmacy',               icon: 'firstaid.png'},
  {category: health, identifier: :physiotherapist,        osm_key: 'healthcare', osm_value: 'physiotherapist',        icon: 'massage.png'},
  {category: health, identifier: :psychotherapist,        osm_key: 'healthcare', osm_value: 'psychotherapist',        icon: 'therapy.png'},
  {category: health, identifier: :social_facility,        osm_key: 'amenity',    osm_value: 'social_facility',        icon: 'social_facility.png'},
  {category: health, identifier: :speech_therapist,       osm_key: 'healthcare', osm_value: 'speech_therapist',       icon: 'conversation.png'},
  {category: health, identifier: :veterinary,             osm_key: 'amenity',    osm_value: 'veterinary',             icon: 'veterinary.png'},
])

Region.delete_all
Region.connection.execute('ALTER TABLE regions AUTO_INCREMENT=1')

berlin_grenze = RGeo::Cartesian.factory.parse_wkt "POLYGON ((10 10, 110 10, 110 110, 10 110))"
Region.create(name: 'berlin', grenze: berlin_grenze)
