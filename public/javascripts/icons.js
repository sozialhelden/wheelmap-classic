var iconForTypeList = {
  'arts-centre': 'palette',
  'atm': 'credit-cards',  
  'audiologist': '',  
  'baby-hatch': '',  
  'bank': 'money-coin',  
  'bar': 'glass',  
  'bench': '',  
  'bicycle-parking': '',  
  'bicycle-rental': '',  
  'biergarten': 'weather',  
  'brothel': '',  
  'bureau-de-change': 'bureau-de-change',  
  'cafe': 'cake',  
  'car-rental': 'car-rental',  
  'car-sharing': 'car-sharing',  
  'cinema': 'film',  
  'clock': 'clock-frame',  
  'coast-guard': 'lifebuoy',  
  'college': '',  
  'community-centre': '',  
  'courthouse': 'auction-hammer-gavel',  
  'crematorium': '',  
  'drinking-water': '',  
  'embassy': 'locale',  
  'emergency-phone': '',  
  'fast-food': 'fast-food',  
  'fire-hydrant': 'fire',  
  'fire-station': 'fire-station',  
  'fountain': '',  
  'fuel': '',  
  'grave-yard': '',  
  'grit-bin': '',  
  'hospital': 'hospital',  
  'hunting-stand': 'target',  
  'kindergarten': 'smiley',  
  'library': 'book-open',  
  'marketplace': 'shopping-basket',  
  'milk-dispenser': '',  
  'nightclub': 'speaker',  
  'parking': 'parking',  
  'pharmacy': 'pharmacie-germany',  
  'place-of-worship': '',  
  'police': 'police',  
  'post-box': 'mail',  
  'post-office': 'post-office',  
  'prison': 'user-thief-baldie',  
  'pub': '',  
  'public-building': '',  
  'recycling': 'bin-full',  
  'register-office': '',  
  'restaurant': 'cutlery',  
  'sauna': '',  
  'school': '',  
  'stripclub': '',  
  'studio': '',  
  'telephone': 'telephone',  
  'theatre': 'mask',  
  'toilets': 'toilet',  
  'townhall': '',  
  'university': '',  
  'vending-machine': '',  
  'veterinary': '',  
  'waste-basket': '',  
  'waste-disposal': '',
  'subway': 'public-transport-subway-germany',  
  'light-rail': 'public-transport-light-rail-germany',
  'tram-stop': 'public-transport-tram-germany',
  'bus-stop': 'public-transport-bus-germany',
  'ferry-terminal': 'public-transport-ferry-germany',
  'taxi': 'public-transport-taxi-germany'
};

var placeIcons = {};

function iconFileNameForType(type) {
  return '/images/icons/' + iconForTypeList[type] + '.png';
}

function iconForType(type) {
  var icon = placeIcons[type];
  if (!icon) {
    var size = new OpenLayers.Size(16, 16);
    var offset = new OpenLayers.Pixel(-8, -16);
    icon = placeIcons[type] = new OpenLayers.Icon(iconFileNameForType(type), size, offset)
  }
  return icon;
}