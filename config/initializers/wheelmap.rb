# 'Essen & Trinken': ['fast-food', 'restaurant', 'biergarten', 'cafe', 'bar', 'pub'],
# 'Freizeit': ['cinema', 'arts-centre', 'nightclub', 'sauna', 'theatre'],
# 'Geld': ['bank', 'atm', 'bureau-de-change'],
# 'Post': ['post-box', 'post-office'],
# 'Botschaften & Behörden': ['embassy', 'courthouse', 'police', 'fire-station', 'public-building', 'register-office', 'townhall', 'community-centre'],
# 'Medizin': ['hospital', 'pharmacy'],
# 'Auto & Fahrrad': ['fuel', 'car-rental', 'car-sharing', 'parking', 'bicycle-parking', 'bicycle-rental'],
# 'Kinder & Bildung': ['kindergarten', 'school', 'college', 'university', 'library'],
# 'Sonstiges': ['marketplace', 'telephone', 'toilets', 'grave-yard', 'place-of-worship']

WheelchairStatus = {'yes' => :yes, 'limited' => :limited, 'no' => :no, 'unknown' => :unknown}

Amenities = {
  :public_transfer => %w{subway aerodrome bicycle_rental bus_station bus_stop ferry ferry_terminal halt platform subway_entrance terminal tram_stop parking_aisle fuel parking car_rental car_sharing boatyard cable_car chair_lift},
  :food => %w{cafe pub restaurant fast_food drinking_water},
  :leisure => %w{cinema theatre zoo nightclub gallery arena},
  :money_post => %w{post_office atm bank bureau_de_change},
  :education => %w{college  library school university museum kindergarten},
  :shopping => %w{supermarket hairdresser clothes mall furniture electronics books beverages alcohol department_store shoes hardware garden_centre optician computer bakery},
  :sport => %w{stadium sports_centre swimming_pool swimming},
  :tourism => %w{archaeological_site arts_centre artwork battlefield beacon theme_park attraction beach viewpoint tower memorial information cave_entrance castle},
  :accommodation => %w{chalet hostel hotel motel camp_site guest_house caravan_site bed_and_breakfast beach_resort},
  :misc => %w{places_of_worship hospital doctor pharmacy veterinary toilets},
  :government => %w{courthouse public_building townhall}
}
