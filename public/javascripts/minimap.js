//var allAmenities = 'arts-centre atm audiologist baby-hatch bank bar bench bicycle-parking bicycle-rental biergarten brothel bureau-de-change bus-station cafe car-rental car-sharing cinema clock coast-guard college community-centre courthouse crematorium drinking-water embassy emergency-phone fast-food ferry-terminal fire-hydrant fire-station fountain fuel grave-yard grit-bin hospital hunting-stand kindergarten library marketplace milk-dispenser nightclub parking pharmacy place-of-worship police post-box post-office prison pub public-building recycling register-office restaurant sauna school stripclub studio taxi telephone theatre toilets townhall university vending-machine veterinary waste-basket waste-disposal subway'.split(' ');
var amenitiesGrouped = {
  'Nahverkehr': ['subway', 'light_rail', 'tram_stop', 'bus_stop', 'ferry_terminal'],
  'Essen & Trinken': ['fast_food', 'restaurant', 'biergarten', 'cafe', 'bar', 'pub'],
  'Freizeit': ['cinema', 'arts_centre', 'nightclub', 'sauna', 'theatre'],
  'Geld': ['bank', 'atm', 'bureau_de_change'],
  'Post': ['post_box', 'post_office'],
  'Botschaften & Behörden': ['embassy', 'courthouse', 'police', 'fire_station', 'public_building', 'register_office', 'townhall', 'community_centre'],
  'Medizin': ['hospital', 'pharmacy'],
  'Auto & Fahrrad': ['fuel', 'car_rental', 'car_sharing', 'parking', 'bicycle_parking', 'bicycle_rental'],
  'Kinder & Bildung': ['kindergarten', 'school', 'college', 'university', 'library'],
  'Sonstiges': ['marketplace', 'telephone', 'toilets', 'grave_yard', 'place_of_worship']
}


var amenities = [];
$.each(amenitiesGrouped, function(i, group) {
  amenities = $.merge(amenities, group);
});

var states = {
  yes: true,
  no: true,
  limited: true,
  unknown: true
};

var counts = { yes: 0, no: 0, limited: 0, unknown: 0 };


drawmap(defaultControls(), 'minimap');
