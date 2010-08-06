var map;
var epsg4326, epsg900913;
if (typeof(lat) == 'undefined'){
  var lat = parseFloat(geoip_latitude());
}
if (typeof(lon) == 'undefined'){
  var lon = parseFloat(geoip_longitude());
}
var zoom = 17;
var places = [];
var mapnik;
var places;
var draggable;

var states = {
  yes: true,
  no: true,
  limited: true,
  unknown: true
};

var styleTypeLookup = {
  yes: {
    display: 'block'
  },
  no: {
    display: 'none'
  }
  
}

function markerLayer(name){
  $.each(map.layers, function(i, layer){
    if(layer.name == name) {
      alert('Match: ' + layer.name);
      return i;
    }
  });
}

function drawmap(controls, element) {
  OpenLayers.Lang.setCode('de');

  epsg900913 = new OpenLayers.Projection("EPSG:900913");
  epsg4326 = new OpenLayers.Projection("EPSG:4326");
  map = new OpenLayers.Map(element, {
    projection: epsg900913,
    displayProjection: epsg4326,
    controls: controls,
    maxExtent: new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34),
    numZoomLevels: 19,
    maxResolution: 156543.0399,
    units: 'm'
  });
  
  mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik", {displayClass:'olMap', opacity:0.5, transitionEffect:'resize', numZoomLevels: 19});

  // Use for offline mode
  // mapnik = new OpenLayers.Layer.OSM("Mapnik", 'http://wheelmap.local/images/tiles/${z}/${x}/${y}.png' ,{displayClass:'olMap', opacity:0.5, transitionEffect:'resize', numZoomLevels: 19});
  
  map.addLayers([mapnik]);
}

function defaultControls(){
  return [
    new OpenLayers.Control.ArgParser(),
    new OpenLayers.Control.Permalink(),
    new OpenLayers.Control.Attribution({id:'attribution',displayClass:"olControlAttribution"}),
    new OpenLayers.Control.PanZoomBar({id:'panzoombar',displayClass:'olControlPanZoomBar'}),
    new OpenLayers.Control.Navigation({zoomWheelEnabled:true, autoActivate:true}),
    new OpenLayers.Control.KeyboardDefaults(),
    new OpenLayers.Control.ScaleLine()
  ]
}


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

function eachState(f) {
  $.each(['unknown', 'no', 'limited', 'yes'], function(i, state) { f(state); });
}


function showStates() {
  $.each(places.features, function(i,feature){
    if(states[feature.attributes.wheelchair] == true){
      feature.attributes.state = 'yes';
    }else{
      feature.attributes.state = 'no';
    }
  });
  places.styleMap.addUniqueValueRules("default", "state", styleTypeLookup);
  places.redraw();
  places.setVisibility(true);
}

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

function placesStyle(){
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

function clusterStrategy(){
  return new OpenLayers.Strategy.Cluster({distance: 15, threshold: 3});
}

function createPlacesLayer(style) { 
  places = new OpenLayers.Layer.Vector(
    "Places ",
    {
      styleMap: style,
      rendererOptions: { yOrdering: true },
      visibility: true,
      strategies: [clusterStrategy()]
    });
    
  map.addLayer(places);
  activateSelectControl(places);
}

function createDraggableLayer(style, lon, lat) {  

  var draggable_layer = new OpenLayers.Layer.Vector(
    "Draggable",
    {
      styleMap: style,
      rendererOptions: { yOrdering: true },
      visibility: true,
    });    
    map.addLayer(draggable_layer);
    activateDragControl(draggable_layer);
    addPin(draggable_layer, lon,lat);
}

function activateDragControl(layer){
  var dg = new OpenLayers.Control.DragFeature(layer, { onComplete:onCompleteDrag });
  map.addControl(dg); 
  dg.activate();
}

function activateSelectControl(layer){
  var sc = new OpenLayers.Control.SelectFeature(layer, { onSelect:openPopup});
  map.addControl(sc);
  sc.activate();  
}


function addPin(layer, lon, lat){
  var features = [];
  layer.removeFeatures(layer.features);
  // var center = centerCoordinates();
  var lonLat = lonLatToMercator({ lon: lon * 1.0, lat: lat * 1.0 });
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
  return map.center.clone().transform(map.getProjectionObject(), epsg4326);
}

function onCompleteDrag(feature) 
{ 
  if(feature) 
  {	
    // replace coordinate values in feature attributes 
    var lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    var coordinates = lonlat.clone().transform(map.getProjectionObject(), epsg4326);
    $('#node-lat').attr('value', coordinates.lat);
    $('#node-lon').attr('value', coordinates.lon);
  }
};


function permalink(path) {
  var ll = centerCoordinates();
  var query = '?lat=' + ll.lat + '&lon=' + ll.lon + '&zoom=' + map.zoom;
  return path + query;
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
