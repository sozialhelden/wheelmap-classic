var map;
var epsg4326, epsg900913;
var lon = 13.393833875481;
var lat = 52.514131754649;
var zoom = 16;

//var allAmenities = 'arts-centre atm audiologist baby-hatch bank bar bench bicycle-parking bicycle-rental biergarten brothel bureau-de-change bus-station cafe car-rental car-sharing cinema clock coast-guard college community-centre courthouse crematorium drinking-water embassy emergency-phone fast-food ferry-terminal fire-hydrant fire-station fountain fuel grave-yard grit-bin hospital hunting-stand kindergarten library marketplace milk-dispenser nightclub parking pharmacy place-of-worship police post-box post-office prison pub public-building recycling register-office restaurant sauna school stripclub studio taxi telephone theatre toilets townhall university vending-machine veterinary waste-basket waste-disposal subway'.split(' ');
var amenitiesGrouped = {
  'Nahverkehr': ['subway', 'light-rail', 'tram-stop', 'bus-stop', 'ferry-terminal'],
  'Essen & Trinken': ['fast-food', 'restaurant', 'biergarten', 'cafe', 'bar', 'pub'],
  'Freizeit': ['cinema', 'arts-centre', 'nightclub', 'sauna', 'theatre'],
  'Geld': ['bank', 'atm', 'bureau-de-change'],
  'Post': ['post-box', 'post-office'],
  'Botschaften & Behörden': ['embassy', 'courthouse', 'police', 'fire-station', 'public-building', 'register-office', 'townhall', 'community-centre'],
  'Medizin': ['hospital', 'pharmacy'],
  'Auto & Fahrrad': ['fuel', 'car-rental', 'car-sharing', 'parking', 'bicycle-parking', 'bicycle-rental'],
  'Kinder & Bildung': ['kindergarten', 'school', 'college', 'university', 'library'],
  'Sonstiges': ['hunting-stand', 'marketplace', 'telephone', 'toilets', 'grave-yard']
}
var amenities = [];
$.each(amenitiesGrouped, function(i, group) {
  amenities = $.merge(amenities, group);
});

var states = { yes: true, no: true, limited: true, unknown: true };

function drawmap() {
  OpenLayers.Lang.setCode('de');
  
  epsg900913 = new OpenLayers.Projection("EPSG:900913");
  epsg4326 = new OpenLayers.Projection("EPSG:4326");
  map = new OpenLayers.Map('map', {
      projection: epsg900913,
      displayProjection: epsg4326,
      controls: [
        new OpenLayers.Control.MouseDefaults(),
        new OpenLayers.Control.Attribution()
      ],
      maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
     numZoomLevels: 18,
     maxResolution: 156543,
     units: 'meters'
  });

  var mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
  map.addLayer(mapnik);
  
  checkForPermalink();
  jumpTo(lon, lat, zoom);
  setTimeout(loadPlaces, 1000);
  
  var amenitiesElement = $('#amenities');
  $.each(amenitiesGrouped, function(title, group) {
    var html = '';
    $.each(group, function(i, amenity) {
      html += '<a href="#" onclick="return toggleLayers(\'' + amenity + '\')" class="' + ((amenity == 'subway' || amenity == 'light-rail') ? 'visible' : 'hidden') + '" title="' + amenity + '"><span class="' + amenity + '"></span></a>';
    });
    amenitiesElement.append('<li><h4>' + title + '</h4><div>' + html + '</div></li>');
  });
}

function toggleLayers(amenity) {
  var visibility = false;
  visibility = !$('.' + amenity).parent().hasClass('visible');
  eachState(function(state) {
    console.log(amenity + '-' + state);
    var layer = mapLayers[amenity + '-' + state];
    layer.setVisibility(visibility && states[state]);    
  });
  $('.' + amenity).parent().removeClass(visibility ? 'hidden' : 'visible').addClass(visibility ? 'visible' : 'hidden');
  return false;
}

function mapBBOX() {
  return map.getExtent().clone().transform(map.getProjectionObject(), epsg4326);
}


drawmap();


function addMarker(layer, lon, lat, popupContentHTML, icon) {
  var ll = new OpenLayers.LonLat(Lon2Merc(lon), Lat2Merc(lat));
  var feature = new OpenLayers.Feature(layer, ll); 
  feature.closeBox = true;
  feature.popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {minSize: new OpenLayers.Size(300, 180) } );
  feature.data.popupContentHTML = popupContentHTML;
  feature.data.overflow = "hidden";

  var marker = new OpenLayers.Marker(ll, icon.clone());
  marker.feature = feature;

  var markerClick = function(evt) {
      if (this.popup == null) {
          this.popup = this.createPopup(this.closeBox);
          map.addPopup(this.popup);
          this.popup.show();
      } else {
          this.popup.toggle();
      }
      OpenLayers.Event.stop(evt);
  };
  marker.events.register("mousedown", feature, markerClick);

  layer.addMarker(marker);
}


function eachState(f) {
  $.each(['yes', 'no', 'limited', 'unknown'], function(i, state) { f(state); });
}


function switchState() {
  $.each(amenities, function(i, amenity) {
    eachState(function(state) {
      mapLayers[amenity + '-' + state].setVisibility($('.' + amenity).parent().hasClass('visible') && states[state]);
    });
  });
  //eachState(function(state) {
  //  $('#wheelchair-' + state).attr('checked', state);
  //});
}


$(function() {
  $('#wheelchair-yes').click(function() {
    states.yes = !states.yes;
    switchState();
  });
  $('#wheelchair-limited').click(function() {
    states.limited = !states.limited;
    switchState();
  });
  $('#wheelchair-no').click(function() {
    states.no = !states.no;
    switchState();
  });
  $('#wheelchair-unknown').click(function() {
    states.unknown = !states.unknown;
    switchState();
  });
  
  $('#links .refresh').click(function() {
    loadPlaces();
    return false;
  });
});

 
function loadPlaces() {
  var bbox = mapBBOX().toBBOX();
  
  $('#spinner').show();
  
  if (typeof(window.mapLayers) == 'undefined') {
    var layer;
    window.mapLayers = {};
    $.each(amenities, function(i, type) {
      eachState(function(state) {
        var layer = window.mapLayers[type + '-' + state] = new OpenLayers.Layer.Markers(
            type + '-' + state,
            {
              projection: new OpenLayers.Projection("EPSG:4326"), 
              visibility: (type == 'subway' || type == 'light-rail') && states[state],
              displayInLayerSwitcher: false
            }
          );
        map.addLayer(layer);
      });
    });
  }
  
  var size = new OpenLayers.Size(28, 34);
  var offset = new OpenLayers.Pixel(-15, -34);
  var icons = {
      yes: new OpenLayers.Icon('/images/barrier-free.png', size, offset),
      no: new OpenLayers.Icon('/images/not-barrier-free.png', size, offset),
      limited: new OpenLayers.Icon('/images/limited-barrier-free.png', size, offset),
      unknown: new OpenLayers.Icon('/images/unknown.png', size, offset)
    };
  
  
  $.getJSON('/data/' + bbox, function(data) {
    $.each(data, function(i, point) {
      var layer = window.mapLayers[point.type + '-' + point.wheelchair];
      if (point.type=='subway')console.log(point.type + '-' + point.wheelchair + '-' + point.name);
      if (layer) {
        addMarker(layer, point.lon * 1.0, point.lat * 1.0, point.name, icons[point.wheelchair]);
      }
      $('#spinner').hide();
    });
  });
  
}