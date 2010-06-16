# 'Essen & Trinken': ['fast-food', 'restaurant', 'biergarten', 'cafe', 'bar', 'pub'],
# 'Freizeit': ['cinema', 'arts-centre', 'nightclub', 'sauna', 'theatre'],
# 'Geld': ['bank', 'atm', 'bureau-de-change'],
# 'Post': ['post-box', 'post-office'],
# 'Botschaften & Behörden': ['embassy', 'courthouse', 'police', 'fire-station', 'public-building', 'register-office', 'townhall', 'community-centre'],
# 'Medizin': ['hospital', 'pharmacy'],
# 'Auto & Fahrrad': ['fuel', 'car-rental', 'car-sharing', 'parking', 'bicycle-parking', 'bicycle-rental'],
# 'Kinder & Bildung': ['kindergarten', 'school', 'college', 'university', 'library'],
# 'Sonstiges': ['marketplace', 'telephone', 'toilets', 'grave-yard', 'place-of-worship']
# 
Amenities = {
  :public_transfer => [
    {:subway => ['subway']},
    {:light_rail => ['light_rail', 'monorail', 'platform', 'station', 'halt']},
    {:tram_stop => ['tram_stop']},
    {:bus_stop => ['bus_stop', 'bus_station']},
    {:ferry_terminal => ['ferry_terminal']},
  ],
  :food => [
    {:fast_food => ['fast_food']},
    {:restaurant => ['restaurant']},
    {:biergarten => ['biergarten']},
    {:cafe => ['cafe']},
    {:bar => ['bar']},
    {:pub => ['pub']}
  ],
  :leisure => [
    {:cinema =>['cinema']},
    {:arts_centre  => ['arts_centre']},
    {:nightclub => ['nightclub']},
    {:sauna => ['sauna']},
    {:theatre => ['theatre']},
    {:shop => ['shop']}
  ],
  :money => [
    {:bank => ['bank']},
    {:atm => ['atm']},
    {:bureau_de_change => ['bureau_de_change']}
  ],
  :post => [
    {:post_box => ['post_box']},
    {:post_office => ['post_office']}
  ],
  :government => [
     {:embassy => ['embassy']},
     {:courthouse => ['courthouse']},
     {:police => ['police']},
     {:fire_station => ['fire_station']},
     {:public_building => ['public_building']},
     {:register_office => ['register_office']},
     {:townhall => ['townhall']},
     {:community_centre => ['community_centre']}
  ],
  :health => [
    {:hospital => ['hospital']},
    {:pharmacy => ['pharmacy']}
  ],
  :car => [  
    {:fuel => ['fuel']},
    {:car_rental => ['car_rental']},
    {:car_sharing => ['car_sharing']},
    {:parking => ['parking']},
    {:bicycle_parking => ['bicycle_parking']},
    {:bicycle_rental => ['bicycle_rental']}
  ],
  :education => [
    {:kindergarten => ['kindergarten']},
    {:school => ['school']},
    {:college => ['college']},
    {:university => ['university']},
    {:library =>  ['library']}
  ],
  :misc => [
    {:marketplace => ['marketplace']},
    {:telephone => ['telephone']},
    {:toilets => ['toilets']},
    {:grave_yard => ['grave_yard']},
    {:place_of_worship => ['place_of_worship']}
  ]
}
