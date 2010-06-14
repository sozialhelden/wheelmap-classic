var map;
var epsg4326, epsg900913;
var lat = parseFloat(geoip_latitude());
var lon = parseFloat(geoip_longitude());
var zoom = 16;
var places = [];
var mapnik;
var places;
var draggable;

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


var typeVisibilities = {};
$.each(amenities, function(i, type) {
  typeVisibilities[type] = { display: 'none' };
});
$.each(object_types, function(i, type) {
  // alert(type);
  typeVisibilities[type].display = 'block';
});


var states = {
  yes: true,
  no: true,
  limited: true,
  unknown: true
};


var counts = { yes: 0, no: 0, limited: 0, unknown: 0 };

function markerLayer(name){
  $.each(map.layers, function(i, layer){
    if(layer.name == name) {
      alert('Match: ' + layer.name);
      return i;
    }
  });
}

function drawmap() {
  OpenLayers.Lang.setCode('de');

  epsg900913 = new OpenLayers.Projection("EPSG:900913");
  epsg4326 = new OpenLayers.Projection("EPSG:4326");
  map = new OpenLayers.Map('map', {
    projection: epsg900913,
    displayProjection: epsg4326,
    controls: [
      new OpenLayers.Control.MouseDefaults(),
      new OpenLayers.Control.KeyboardDefaults(),
      new OpenLayers.Control.PanZoomBar(),
      new OpenLayers.Control.MouseToolbar(),
      // new OpenLayers.Control.LayerSwitcher()
      
    ],
    maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
    numZoomLevels: 10,
    maxResolution: 156543,
    units: 'meters'
  });
  

  mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik");
  map.addLayer(mapnik);
  

  checkForPermalink();
  jumpTo(lon, lat, zoom);

  createLayer();
  // createDraggableLayer();
  
  map.events.register('moveend', null, loadPlaces);
  setTimeout(loadPlaces, 1000);
}

function onCompleteDrag(feature) 
{ 
  if(feature) 
  {	
    // replace coordinate values in feature attributes 
    var pointX = feature.geometry.x; 
    var pointY = feature.geometry.y;
    alert(pointY);
  }
};


function toggleLayers(type, show) {
  var visibility = false;
  visibility = typeof(show) == 'undefined' ? !$('.' + type).parent().hasClass('visible') : show;
  $('.' + type).parent().removeClass(visibility ? 'hidden' : 'visible').addClass(visibility ? 'visible' : 'hidden');
  typeVisibilities[type].display = visibility ? 'block' : 'none';
  add_or_remove_type_from_object_types(type, visibility);
  showStates();
  return false;
}

function add_or_remove_type_from_object_types(type, add){
  
  if(add == true){
    if(!object_types_contains(type)){
      object_types.push(type);
      loadPlaces();
    }
  }else{
    if(object_types_contains(type) == true){      
      index = object_types.indexOf(type);
      object_types.splice(index,1);
    }
  }
}

function object_types_contains(type){
  return (object_types.indexOf(type) != -1)
}

function mapBBOX() {
  var box = map.getExtent().clone();
  var latlon = map.getLonLatFromViewPortPx({ x: 380, y: 80 });
  box.left = latlon.lon;
  box.top = latlon.lat;
  latlon = map.getLonLatFromViewPortPx({ x: $(document).width() - 80, y: $(document).height() - 80 });
  box.right = latlon.lon;
  box.bottom = latlon.lat;
  return box.transform(map.getProjectionObject(), epsg4326);
}


drawmap();


function eachState(f) {
  $.each(['unknown', 'no', 'limited', 'yes'], function(i, state) { f(state); });
}


function showStates() {
  places.styleMap.addUniqueValueRules("default", "type", typeVisibilities);
  places.redraw();
  places.setVisibility(true);
}


$(function() {
  $('.wheelchair input').click(function() {
    var state = this.id.replace(/wheelchair-/, '');
    states[state] = this.checked;
    showStates();
  });
});


function loadPlaces() {
  $('#spinner').show();
  counts = { yes: 0, no: 0, limited: 0, unknown: 0 };

  var bbox = mapBBOX().toBBOX();
  $.getJSON('/nodes?bbox=' + bbox + '&object_types=' + object_types.join(','), function(data) {
    var features = [];
    $.each(data, function(i, place) {
      if (place.type) {
        var lonLat = lonLatToMercator({ lon: place.lon * 1.0, lat: place.lat * 1.0 });
        var point = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);
        var feature = new OpenLayers.Feature.Vector(point,place);
        feature.attributes.icon = iconForType[place.type];
        try {
          features.push(feature);
        }
        catch (e) {}
        counts[place.wheelchair]++;
        places[place.id] = place;
        $('*[data-osm-id=' + place.id + ']').addClass(place.type);
      }
    });
    places.removeFeatures(places.features);
    places.addFeatures(features);
    places.redraw();
    $.each(states, function(i,state){
      $('.wheelchair .' + state + ' span').html(counts[state]);
    });
    showStates();
    $('#spinner').hide();
  });
}

function markerStyle(){
  return new OpenLayers.StyleMap({
    externalGraphic: "/images/icons/${icon}.png",
    graphicWidth: 16,
    graphicHeight: 16,
    backgroundGraphic: "/images/marker-${wheelchair}.png",
    backgroundWidth: 36,
    backgroundHeight: 28,
    backgroundXOffset: -12,
    backgroundYOffset: -26,
    graphicXOffset: -8,
    graphicYOffset: -22,
    graphicZIndex: 10,
    backgroundGraphicZIndex: 10
  });
}

function needleStyle(){
  return new OpenLayers.StyleMap({
    externalGraphic: "/images/icons/${icon}.png",
    graphicWidth: 16,
    graphicHeight: 16,
    backgroundGraphic: "/images/marker-${wheelchair}.png",
    backgroundWidth: 36,
    backgroundHeight: 28,
    backgroundXOffset: -12,
    backgroundYOffset: -26,
    graphicXOffset: -8,
    graphicYOffset: -22,
    graphicZIndex: 10,
    backgroundGraphicZIndex: 10,
    cursor: 'move'
  });
}

function createLayer() {
  var style = markerStyle();

  var strategy = new OpenLayers.Strategy.Cluster({distance: 15, threshold: 2});
  places = new OpenLayers.Layer.Vector(
    "Places ",
    {
      styleMap: style,
      rendererOptions: { yOrdering: true },
      visibility: true,
      strategies: [strategy]
    });
    
  map.addLayer(places);
  selectControl = new OpenLayers.Control.SelectFeature(places,
    { onSelect:openPopup, onUnselect:closePopup });
  map.addControl(selectControl);
  selectControl.activate();  
}

function createDraggableLayer() {  
  var style = needleStyle();
  var draggable_layer = new OpenLayers.Layer.Vector(
    "Draggable",
    {
      styleMap: style,
      rendererOptions: { yOrdering: true },
      visibility: true,
    });    
    map.addLayer(draggable_layer);
    createDragControl(draggable_layer);
    // addPin(draggable_layer);
}

function createDragControl(layer){
   var dragControl = new OpenLayers.Control.DragFeature(
    layer, 
    {'onComplete': onCompleteDrag}
    );
    map.addControl(dragControl); 
    dragControl.activate();
}

function addPin(layer){
  var features = [];
  layer.removeFeatures(layer.features);
  var center = centerCoordinates();
  var lonLat = lonLatToMercator({ lon: center.lon * 1.0, lat: center.lat * 1.0 });
  var point = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);
  
  var feature = new OpenLayers.Feature.Vector(point);
  feature.attributes.icon = iconForType['sfsdf'];
  feature.attributes.type = 'Subway';
  feature.attributes.wheelchair = 'no';
  feature.attributes.name = 'Neuer Ort';
  feature.attributes.tags = {"railway":"subway","osm_id":"46095762","ref":"U5","construction":"yes","synthesized_name":"Subway"};
  feature.attributes.osmid = 1234;
  features.push(feature);
  layer.addFeatures(features);
  layer.redraw();
}

function lonLatToMercator(ll) {
  // var lon = ll.lon * 20037508.34 / 180;
  var lon = ll.lon * 111319.49077777777;
  // var lat = Math.log(Math.tan((90 + ll.lat) * Math.PI / 360)) / (Math.PI / 180);
  var lat = Math.log(Math.tan((90 + ll.lat) * 0.008726646259971648)) / (0.017453292519943295);
  // lat = lat * 20037508.34 / 180;
  lat = lat * 111319.49077777777;
  return new OpenLayers.LonLat(lon, lat);
}

function centerCoordinates() {
  return map.getCenter().clone().transform(map.getProjectionObject(), epsg4326);
}

function permalink() {
  var ll = centerCoordinates();
  var query = '#lat=' + ll.lat + '&lon=' + ll.lon + '&zoom=' + map.zoom;
  return location.protocol + '//' + location.host + '/' + query;
}


$(function() {
  $('a[data-show]').click(function() {
    $($(this).attr('data-show')).fadeIn();
    return false;
  });
  $('a[data-hide]').click(function() {
    $($(this).attr('data-hide')).fadeOut();
    return false;
  });
});

function $w(string) {
  return string.split(' ');
}
