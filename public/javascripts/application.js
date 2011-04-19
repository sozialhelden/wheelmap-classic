var map;
var epsg4326, epsg900913;
if (!window.zoom){
  var zoom = 14;
}

var places = [];
var mapnik;
var draggable;

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
// OpenLayers.ImgPath = "http://js.mapbox.com/theme/dark/";
// OpenLayers.ImgPath = "http://wheelmap.local/img/";
OpenLayers.ImgPath = "http://staging.wheelmap.org/img/";

var states = {
  yes: true,
  no: true,
  limited: true,
  unknown: true
};

var categories = {
  public_transfer: true,
  food: true,
  leisure: true,
  money_post: true,
  education: true,
  shopping: true,
  sport: true,
  tourism: true,
  accommodation: true,
  misc: true,
  government: true
};

var styleTypeLookup = {
  yes: {
    display: 'block'
  },
  no: {
    display: 'none'
  }
};

function markerLayer(name){
  $.each(map.layers, function(i, layer){
    if(layer.name == name) {
      alert('Match: ' + layer.name);
      return i;
    }
  });
}

function jumpTo(lon, lat, zoom) {
  var lonlat = new OpenLayers.LonLat(lon, lat).transform(
    epsg4326, //transform from WGS 1984
    map.getProjectionObject()               //to Spherical Mercator Projection
  );
  map.setCenter(lonlat, zoom);
  $.cookie('last_lat', lat, { expires: 7, path: '/'});
  $.cookie('last_lon', lon, { expires: 7, path: '/'});
  return false;
}

function drawmap(controls, element) {
  OpenLayers.Lang.setCode(language);

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
  
  mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik", { displayClass:'olMap', opacity:1.0, transitionEffect:'resize', numZoomLevels: 19, buffer: 1});
  
  // Use for offline mode
  // mapnik = new OpenLayers.Layer.OSM("Mapnik", 'http://wheelmap.local/images/tiles/${z}/${x}/${y}.png' ,{displayClass:'olMap', opacity:0.5, transitionEffect:'resize', numZoomLevels: 19});
  
  // User cloudmade style
  //  mapnik = new OpenLayers.Layer.CloudMade("CloudMade", {
  //     key: 'ff94b6ad4b174d648b9c491706f13579',
  //     styleId: 1714,
  //     displayClass:'olMap',
  //     opacity:1.0,
  //     transitionEffect:'resize',
  //     numZoomLevels: 19
  // });
  
  map.addLayers([mapnik]);
}

function defaultControls(){
  return [
    new OpenLayers.Control.ArgParser(),
    new OpenLayers.Control.Attribution({id:'attribution',displayClass:"olControlAttribution"}),
    new OpenLayers.Control.PanZoomBar({id:'panzoombar',displayClass:'olControlPanZoomBar'}),
    new OpenLayers.Control.Navigation({zoomWheelEnabled:true, autoActivate:true}),
    new OpenLayers.Control.KeyboardDefaults(),
    new OpenLayers.Control.ScaleLine({geodesic:true}),
    new OpenLayers.Control.Permalink(),
    new OpenLayers.Control.Permalink('createlink', '/nodes/new'),
  ];
}

/* This is called for each feature to be added to the layer */
function determineDisplayState(evt){
  var feature = evt.feature;
  if(states[feature.attributes.wheelchair] === true && categories[feature.attributes.category] === true){
    feature.attributes.state = 'yes';
  }else{
    feature.attributes.state = 'no';
  }
}

/* This is called after added all features to the layer */
function addDisplayStateRule(evt){
  places.styleMap.addUniqueValueRules("default", "state", styleTypeLookup);
}

function showStates() {
  $.each(places.features, function(i,feature){
    if(states[feature.attributes.wheelchair] === true && categories[feature.attributes.category] === true){
      feature.attributes.state = 'yes';
    }else{
      feature.attributes.state = 'no';
    }
  });
  places.redraw();
}

function centerCoordinates() {
  return map.center.clone().transform(map.getProjectionObject(), epsg4326);
}

/* Callback function when map finished zooming. */
function onZoomEnd(){
  $.cookie('last_zoom', map.getZoom(), { expires: 7, path: '/'});
}

/* Callback function when map finished panning. */
function onMoveEnd(){
  lonlat = centerCoordinates();
  $.cookie('last_lat', lonlat.lat);
  $.cookie('last_lon', lonlat.lon);
}

function showSpinner(){
  $('#spinner').show();
}

function hideSpinner(){
  $('#spinner').hide();
}

/* Callback function when map data is loaded. */
function onLoadStart(){
  showSpinner();
}

/* Callback function after map data was loaded. */
function onLoadEnd(){
  hideSpinner();
}

function addState(feature){
  
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

function placesStyle(){
  return new OpenLayers.StyleMap({
    externalGraphic: "${icon}.png",
    graphicWidth: 16,
    graphicHeight: 16,
    backgroundGraphic: "/images/marker-${wheelchair}.png",
    backgroundWidth: 35,
    backgroundHeight: 30,
    backgroundXOffset: -11,
    backgroundYOffset: -28,
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
    backgroundWidth: 35,
    backgroundHeight: 30,
    backgroundXOffset: -11,
    backgroundYOffset: -28,
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

function bboxStategy(){
  return new OpenLayers.Strategy.BBOX({ratio : 1.3, resFactor:1.3});
}

function geojsonFormat(){
  return new OpenLayers.Format.GeoJSON({
    internalProjection: epsg4326,
    externalProjection: epsg4326,
    ignoreExtraDims: true});
}

function httpProtocol(){
  return new OpenLayers.Protocol.HTTP({
    url:  "nodes.geojson",
    headers:{
      "Content-Type": "application/javascript"
    },
    format: geojsonFormat()
  });
}

function activateSelectControl(layer){
  var sc = new OpenLayers.Control.SelectFeature(layer, {toggle:true, clickout: true});
  map.addControl(sc);
  sc.activate();
}

function removeAllPopups(){
  $.each(map.popups, function(i, popup){
    popup.feature = null;
    map.removePopup(popup);
  });
}

function onPopupClose(evt) {
  removeAllPopups();
   // 'this' is the popup.
   // selectControl.unselect(this.feature);
}

function popup_state_radio(feature, state){
  var id = state + '-' + feature.id;
  var checked = (state == feature.attributes.wheelchair ? ' checked="checked"' : '');
  var disabled = (state == 'unknown' ? ' disabled="disabled"' : '');
  var wheelchair_state = '<li class="' + state + '">';
  wheelchair_state += '<input id="' + id + '" type="radio" name="wheelchair"' + checked + disabled + ' value="' + state + '">';
  wheelchair_state += '<label for="' + id + '">' + OpenLayers.Lang.translate('wheelchair_label_' + state) + '</label>';
  wheelchair_state += '</li>';
  return wheelchair_state;
}

function popup_form(feature){
  var form = '';
  form += '<form action="/nodes/' + feature.attributes.osm_id + '/update_wheelchair.js" method="put" class="update_form">';
  form += '<ol class="wheelchair">';
  form += '<h3><a target="_blank" href="http://blog.wheelmap.org/was-ist-wheelmap/was-bedeutet-barrierefrei/">' + OpenLayers.Lang.translate('wheelchair_help') + '</a></h3>'
  form += popup_state_radio(feature, 'yes');
  form += popup_state_radio(feature, 'limited');
  form += popup_state_radio(feature, 'no');
  form += popup_state_radio(feature, 'unknown');
  form += '<li><input type="hidden" name="method" value="put" /></li>';
  form += '<li>';
  form += '<input type="submit" id="update_button" value="' + OpenLayers.Lang.translate('wheelchair_update_button') +'"/>';
  form += '<img src="/images/spinner-small.gif" id="update_spinner"/>';
  form += '</li></ol>';
  form += '</form>';
  return form;
}

function popup_headline(feature){
 var html = '';
 html += '<h2 class="' + feature.attributes.type + '">';
 html += feature.attributes.headline;
 html += '</h2>';
 return html;
}

function popup_address(feature){
  var html = '';
  if(feature.attributes.address){
    html += '<address>' + feature.attributes.address + '</address>';
  }
  return html;
}

function popup_more_link(feature){
  var html = '';
  html += '<a class="more" href="' + feature.attributes.url + '">';
  html += OpenLayers.Lang.translate('more_information');
  html += '</a>';
  return html;
}

function onFeatureSelect(evt){
  removeAllPopups();
  feature = evt.feature;
  popup = new OpenLayers.Popup.FramedCloud("featurePopup",
                           feature.geometry.getBounds().getCenterLonLat(),
                           null,
                           popup_headline(feature) +
                           popup_address(feature) +
                           popup_more_link(feature) +
                           popup_form(feature),
                           null, true, onPopupClose);
  feature.popup = popup;
  popup.feature = feature;
  map.addPopup(popup);
}

function onFeatureUnselect(evt) {
  removeAllPopups();
}

function createPlacesLayer(style) {
  places = new OpenLayers.Layer.Vector(
    "Places ",
    {
      styleMap: style,
      projection: epsg4326,
      displayProjection: epsg4326,
      rendererOptions: { yOrdering: true },
      strategies: [bboxStategy()],
      protocol: httpProtocol(),
      visibility: true
    });
  map.addLayer(places);
  activateSelectControl(places);
  places.redraw();
  places.events.on({
    'featureselected': onFeatureSelect,
    'featureunselected': onFeatureUnselect,
    'loadstart': onLoadStart,
    'loadend': onLoadEnd,
    'beforefeatureadded': determineDisplayState,
    'beforefeaturesadded': addDisplayStateRule
  });
  map.events.on({
    'zoomend': onZoomEnd,
    'moveend': onMoveEnd
  });
  
}

function onCompleteDrag(feature) 
{ 
  if(feature) 
  {  
    // replace coordinate values in feature attributes 
    var lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    var coordinates = lonlat.clone().transform(map.getProjectionObject(), epsg4326);
    $('#node_lat').attr('value', coordinates.lat);
    $('#node_lon').attr('value', coordinates.lon);
  }
}

function activateDragControl(layer){
  var dg = new OpenLayers.Control.DragFeature(layer, { onComplete:onCompleteDrag });
  map.addControl(dg); 
  dg.activate();
}

function addPin(layer, lon, lat){
  var features = [];
  layer.removeFeatures(layer.features);
  // var center = centerCoordinates();
  var lonLat = lonLatToMercator({ lon: lon * 1.0, lat: lat * 1.0 });
  var point = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);
  
  var feature = new OpenLayers.Feature.Vector(point);
  feature.attributes.icon = '/images/icons/' + iconForType['sfsdf'];
  feature.attributes.type = 'Subway';
  feature.attributes.wheelchair = 'no';
  feature.attributes.name = 'Neuer Ort';
  feature.attributes.tags = {"railway":"subway","osm_id":"46095762","ref":"U5","construction":"yes","synthesized_name":"Subway"};
  feature.attributes.osmid = 1234;
  features.push(feature);
  layer.addFeatures(features);
}

function createDraggableLayer(style, lon, lat) {  

  var draggable_layer = new OpenLayers.Layer.Vector(
    "Draggable",
    {
      styleMap: style,
      rendererOptions: { yOrdering: true },
      visibility: true
    });    
  map.addLayer(draggable_layer);
  activateDragControl(draggable_layer);
  addPin(draggable_layer, lon,lat);
  draggable_layer.redraw();
}

function runEffect(){
  setTimeout(function(){
      var selectedEffect = 'blind';
      var options = {};
      $(".flash").fadeOut();
   }, 5000);
};



$(function() {
  $('#feedback_link').click(function(){
    UserVoice.Popin.show(uservoiceOptions);
    return false;
  });
  $('a[data=show]').live('click', function() {
    $(this).parent().fadeIn();
    return false;
  });
  $('a[data=hide]').live('click', function() {
    $(this).parent().fadeOut();
    return false;
  });
  $("#search").autocomplete('/search.js', {
    max: 10,
    highlight: false,
    scroll: true,
    scrollHeight: 300,
    minChars: 3,
    autofill: true,
    // delimiter: /(,|;)\s*/,
    formatItem: function(data, i, n, value) {
      return value.split(':')[0];
    },
    formatResult: function(data, value) {
      return value.split(':')[0];
    }
  }).result(function(event, data, formatted) {
      var parts = data[0].split(':');
      var lon = parseFloat(parts[1]);
      var lat = parseFloat(parts[2]);
      jumpTo(lon,lat, 17);
  });
  $('.minimize').live('click', function() {
    $(this).parent('div').css('height', '0.5em');
    $(this).parent('div').animate({
      left:'-275px',
    }, 'fast', 'swing', function() {
      $(this).children('.minimize').text('»').addClass('maximize').removeClass('minimize');
      $.cookie('minimized_' + $(this).attr('id'), true);
      
    });
    return false;
  });

  $('.maximize').live('click', function() {
    $(this).parent('div').animate({
      left:'30px',
    }, 'fast', 'swing', function() {
      $(this).css('height', 'auto');
      $(this).children('.maximize').text('«').addClass('minimize').removeClass('maximize');
      $.cookie('minimized_' + $(this).attr('id'), false);
    });
    return false;
  });
  
  $(window).resize(function() {
    var width = $(window).width() - 780;
    if (width > 100) {
      $('#search').css('width', width + 'px');
    }
  }).resize();
});

function $w(string) {
  return string.split(' ');
}
