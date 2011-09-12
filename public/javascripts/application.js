/*global  window, jQuery, $, OpenLayers, language, UserVoice, uservoiceOptions, _gaq*/
/*jslint devel: true, browser: true, maxerr: 200, indent: 2, sloppy: true, nomen: true */

jQuery.parseQuery = function(qs,options) {
  var q = (typeof qs === 'string'?qs:window.location.search), o = {'f':function(v){return unescape(v).replace(/\+/g,' ');}}, options = (typeof qs === 'object' && typeof options === 'undefined')?qs:options, o = jQuery.extend({}, o, options), params = {};
  jQuery.each(q.match(/^\??(.*)$/)[1].split('&'),function(i,p){
    p = p.split('=');
    p[1] = o.f(p[1]);
    params[p[0]] = params[p[0]]?((params[p[0]] instanceof Array)?(params[p[0]].push(p[1]),params[p[0]]):[params[p[0]],p[1]]):p[1];
  });
  return params;
}

var map;
var epsg4326, epsg900913;
if (!window.zoom) {
  var zoom = 14;
}

var places = [];
var mapnik;
var draggable;

OpenLayers.IMAGE_RELOAD_ATTEMPTS = 3;
// OpenLayers.ImgPath = "http://js.mapbox.com/theme/dark/";
// OpenLayers.ImgPath = "http://wheelmap.local/img/";
OpenLayers.ImgPath = "http://wheelmap.org/img/";

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

function runEffect() {
  setTimeout(function () {
    var selectedEffect = 'blind';
    var options = {};
    $(".flash").fadeOut();
  }, 5000);
}

function removeAllPopups() {
  $.each(map.popups, function (i, popup) {
    popup.feature = null;
    map.removePopup(popup);
  });
}


function submit_handler() {
  var form = $(this);
  if ((form.find('input:checked').val()) === 'unknown') {
    return false;
  }
  $('#update_button').attr('disabled', 'disabled');
  $('#update_spinner').show();
  
  $.ajax({ dataType: 'json', type: form.attr('method'), url: form.attr('action'), data: form.serialize(),
    success: function (data, textStatus, XMLHttpRequest) {
      $('#map').after('<div class="flash" id="notice">' + data.message + '<a href="#" data="hide">x</a></div>');
      
      runEffect();
      removeAllPopups();
      $('#update_spinner').hide();
      $('#update_button').removeAttr('disabled');
      if (window._gaq) {
        _gaq.push(['_trackEvent', 'Data', 'Tag', data.wheelchair]);
      }
      return false;
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      $('#map').after('<div class="flash" id="alert">' + textStatus + '<a href="#" data="hide">x</a></div>');
      $('#update_spinner').hide();
      $('#update_button').removeAttr('disabled');
      if (window._gaq) {
        _gaq.push(['_trackEvent', 'Data', 'Tag', 'failed']);
      }
      return false;
    }
  });
  return false;
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
    maxExtent: new OpenLayers.Bounds(-20037508.34, -20037508.34, 20037508.34, 20037508.34),
    numZoomLevels: 19,
    maxResolution: 156543.0399,
    units: 'm'
  });
  
  mapnik = new OpenLayers.Layer.OSM.Mapnik("Mapnik", { displayClass: 'olMap', opacity: 1.0, transitionEffect: 'resize', numZoomLevels: 19, buffer: 1});
  
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

function defaultControls() {
  return [
    new OpenLayers.Control.ArgParser(),
    new OpenLayers.Control.Attribution({id: 'attribution', displayClass: "olControlAttribution"}),
    new OpenLayers.Control.PanZoomBar({id: 'panzoombar', displayClass: 'olControlPanZoomBar'}),
    new OpenLayers.Control.Navigation({zoomWheelEnabled: true, autoActivate: true}),
    new OpenLayers.Control.KeyboardDefaults(),
    new OpenLayers.Control.ScaleLine({geodesic: true}),
    new OpenLayers.Control.Permalink(),
    new OpenLayers.Control.Permalink('createlink', '/nodes/new')
  ];
}

function centerCoordinates() {
  return map.center.clone().transform(map.getProjectionObject(), epsg4326);
}

/* Callback function when map finished zooming. */
function onZoomEnd() {
  $.cookie('last_zoom', map.getZoom(), { expires: 7, path: '/'});
}

/* Callback function when map finished panning. */
function onMoveEnd() {
  var lonlat = centerCoordinates();
  $.cookie('last_lat', lonlat.lat);
  $.cookie('last_lon', lonlat.lon);
}

function showSpinner() {
  $('#spinner').show();
}

function hideSpinner() {
  $('#spinner').hide();
}

/* Callback function when map data is loaded. */
function onLoadStart() {
  showSpinner();
}

/* Callback function after map data was loaded. */
function onLoadEnd() {
  hideSpinner();
}

function addState(feature) {
  
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

function placesStyle() {
  return new OpenLayers.StyleMap({"default":
    new OpenLayers.Style({
      graphicTitle: "${all}",
      graphicName: "circle",
      label: "${label}",
      fontColor: "#FFF",
      fontWeight: "bold",
      fontSize: "13px",
      fillColor: "${color}",
      fillOpacity: "${opacity}",
      strokeColor: "${color}",
      strokeOpacity: 0.7,
      strokeWidth: "2",
      strokeDashstyle: "solid",
      pointRadius: "${radius}",
      cursor: "pointer",
      externalGraphic: "${marker}",
      graphicWidth: 32,
      graphicHeight: 37,
      graphicXOffset: -16,
      graphicYOffset: -33,
      graphicZIndex: "${zindex}",
      backgroundGraphicZIndex: 10
    },{
      context: {
        all: function(feature) {
          if (feature.cluster) {
            feature.attributes.marker = '';
            feature.attributes.radius = 10 + (4 * Math.sqrt(feature.cluster.length));
            feature.attributes.opacity = 0.25;
            feature.attributes.zindex = 15;
            feature.attributes.color = '#8D8D8E';
            feature.attributes.label = feature.cluster.length;
          } else {
            feature.attributes.opacity = 1.0;
            feature.attributes.label = '';
            switch (feature.attributes.wheelchair) {
              case 'yes': feature.attributes.zindex = 50; break;
              case 'limited': feature.attributes.zindex = 40; break;
              case 'no': feature.attributes.zindex = 30; break;
              case 'unknown': feature.attributes.zindex = 20; break;
            }
          }
          return feature.attributes.name;
        },
        marker: function(feature) { return feature.attributes.marker; },
        opacity: function(feature) { return feature.attributes.opacity; },
        cursor: function(feature) { return feature.attributes.cursor; },
        zindex: function(feature) { return feature.attributes.zindex; },
        color: function(feature) { return feature.attributes.color; },
        radius: function(feature) { return feature.attributes.radius; },
        label: function(feature) { return feature.attributes.label; }
      }
    }),
    "select": new OpenLayers.Style({
      graphicZIndex: 100
    })
  });
}

function needleStyle() {
  return new OpenLayers.StyleMap({
    externalGraphic: "${marker}",
    graphicWidth: 32,
    graphicHeight: 37,
    graphicXOffset: -16,
    graphicYOffset: -33,
    graphicZIndex: 10,
    cursor: 'move'
  });
}

function defaultFilter() {
  return new OpenLayers.Filter.Logical({
    type: OpenLayers.Filter.Logical.AND,
    filters: [
      new OpenLayers.Filter.Comparison({
        type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO,
        property: "category",
        value: "unknown"
      })
    ]
  });
}

function clusterStrategy() {
  return new OpenLayers.Strategy.Cluster({distance: 60, threshold: 6});
}

function bboxStategy() {
  return new OpenLayers.Strategy.BBOX({ratio : 0.7, resFactor: 0.2});
}

function filterStrategy(filter) {
  return new OpenLayers.Strategy.Filter({filter: filter});
}

function activeFilterStrategy() {
  var strtgy = null;
  $.each(places.strategies, function (index, strategy) {
    if (strategy.CLASS_NAME === 'OpenLayers.Strategy.Filter') {
      strtgy = strategy;
    }
  });
  return strtgy;
}

function geojsonFormat() {
  return new OpenLayers.Format.GeoJSON({
    internalProjection: epsg4326,
    externalProjection: epsg4326,
    ignoreExtraDims: true});
}

function httpProtocol() {
  return new OpenLayers.Protocol.HTTP({
    url:  "nodes.geojson",
    headers: {
      "Content-Type": "application/javascript"
    },
    format: geojsonFormat(),
    params: {
      limit: 400,
      zoom: zoom
    }
  });
}

function activateSelectControl(layer) {
  var sc = new OpenLayers.Control.SelectFeature(layer, {toggle: true, clickout: true});
  map.addControl(sc);
  sc.activate();
}

function onPopupClose(evt) {
  removeAllPopups();
   // 'this' is the popup.
   // selectControl.unselect(this.feature);
}

function popup_state_radio(feature, state) {
  var id = state + '-' + feature.id;
  var checked = (state === feature.attributes.wheelchair ? ' checked="checked"' : '');
  var disabled = (state === 'unknown' ? ' disabled="disabled"' : '');
  var wheelchair_state = '<li class="' + state + '">';
  wheelchair_state += '<input id="' + id + '" type="radio" name="wheelchair"' + checked + disabled + ' value="' + state + '">';
  wheelchair_state += '<label for="' + id + '">' + OpenLayers.Lang.translate('wheelchair_label_' + state) + '</label>';
  wheelchair_state += '</li>';
  return wheelchair_state;
}

function popup_form(feature) {
  var form = '';
  form += '<form action="/nodes/' + feature.attributes.osm_id + '/update_wheelchair.js" method="post" class="update_form">';
  form += '<ol class="wheelchair">';
  form += '<h3><a target="_blank" href="http://blog.wheelmap.org/was-ist-wheelmap/was-bedeutet-barrierefrei/">' + OpenLayers.Lang.translate('wheelchair_help') + '</a></h3>';
  form += popup_state_radio(feature, 'yes');
  form += popup_state_radio(feature, 'limited');
  form += popup_state_radio(feature, 'no');
  form += popup_state_radio(feature, 'unknown');
  form += '<li><input type="hidden" name="_method" value="put" /></li>';
  form += '<li>';
  form += '<input type="submit" id="update_button" value="' + OpenLayers.Lang.translate('wheelchair_update_button') + '"/>';
  form += '<img src="/images/spinner-small.gif" id="update_spinner"/>';
  form += '</li></ol>';
  form += '</form>';
  return form;
}

function popup_headline(feature) {
  var html = '';
  html += '<h2 style="padding-left:30px;background:url(\'' + feature.attributes.icon + '\') no-repeat bottom left">';
  html += feature.attributes.name;
  html += '</h2>';
  return html;
}

function popup_address(feature) {
  var html = '';
  if (feature.attributes.address) {
    html += '<address>' + feature.attributes.address + '</address>';
  }
  return html;
}

function popup_more_link(feature) {
  var html = '';
  html += '<a class="more" href="' +  ((OpenLayers.Lang.getCode() === 'de') ? '' : '/' + OpenLayers.Lang.getCode()) + '/nodes/' + feature.attributes.osm_id + '">';
  html += OpenLayers.Lang.translate('more_information');
  html += '</a>';
  return html;
}

function onFeatureSelect(evt) {
  removeAllPopups();
  var feature = evt.feature;
  if (feature.cluster) {
    // Center the Map on the cluster with higher zoom level.
    map.setCenter(feature.geometry.bounds.centerLonLat, map.getZoom() + 1);
  } else {
    var popup = new OpenLayers.Popup.FramedCloud("featurePopup",
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
    $('.update_form').submit(submit_handler);
  }
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
      strategies: [bboxStategy(), filterStrategy(defaultFilter())],
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
    'loadend': onLoadEnd
  });
  map.events.on({
    'zoomend': onZoomEnd,
    'moveend': onMoveEnd
  });
  
}

function onCompleteDrag(feature) { 
  if (feature) {  
    // replace coordinate values in feature attributes 
    var lonlat = new OpenLayers.LonLat(feature.geometry.x, feature.geometry.y);
    var coordinates = lonlat.clone().transform(map.getProjectionObject(), epsg4326);
    $('#node_lat').attr('value', coordinates.lat);
    $('#node_lon').attr('value', coordinates.lon);
  }
}

function activateDragControl(layer) {
  var dg = new OpenLayers.Control.DragFeature(layer, { onComplete: onCompleteDrag });
  map.addControl(dg); 
  dg.activate();
}

function addPin(layer, lon, lat) {
  var features = [];
  layer.removeFeatures(layer.features);
  // var center = centerCoordinates();
  var lo = lon;
  lo *= 1.0;
  var la = lat;
  la *= 1.0;
  var lonLat = lonLatToMercator({ lon: lo, lat: la});
  var point = new OpenLayers.Geometry.Point(lonLat.lon, lonLat.lat);
  var feature = new OpenLayers.Feature.Vector(point);
  feature.attributes.marker = '/marker/undefined.png';
  feature.attributes.type = 'Subway';
  feature.attributes.wheelchair = 'no';
  feature.attributes.name = 'Neuer Ort';
  feature.attributes.tags = {"railway": "subway", "osm_id": "46095762", "ref": "U5", "construction": "yes", "synthesized_name": "Subway"};
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
  addPin(draggable_layer, lon, lat);
  draggable_layer.redraw();
}

function addFilter(attribute, value) {
  var filter = new OpenLayers.Filter.Comparison({
    type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO,
    property: attribute,
    value: value
  });
  var filterStrategy = activeFilterStrategy();
  filterStrategy.filter.filters.push(filter);
  filterStrategy.setFilter(filterStrategy.filter);
  FilterSettings.set(attribute, value, true)
  if (window._gaq) {
    _gaq.push(['_trackEvent', 'Filter', 'add_' + attribute, value]);
  }
}

function removeFilter(attribute, value) {
  var filterStrategy = activeFilterStrategy();
  var filters = filterStrategy.filter.filters;
  var position = null;
  $.each(filters, function (index, filter) {
    if (filter.property === attribute && filter.value === value) {
      position = index;
    }
  });

  if (position !== null) {
    filters.splice(position, 1);
    filterStrategy.setFilter(filterStrategy.filter);
    FilterSettings.set(attribute, value, false)
    if (window._gaq) {
      _gaq.push(['_trackEvent', 'Filter', 'remove_' + attribute, value]);
    }
  }
}

$(function () {
  $('#feedback_link').click(function () {
    UserVoice.Popin.show(uservoiceOptions);
    return false;
  });
  $('a[data=show]').live('click', function () {
    $(this).parent().fadeIn();
    return false;
  });
  $('a[data=hide]').live('click', function () {
    $(this).parent().fadeOut();
    return false;
  });
  $('.minimize').live('click', function () {
    $(this).parent('div').animate({ left: '-360px'}, 'fast', 'swing', function () {
      $(this).children('.minimize').addClass('maximize').removeClass('minimize');
      $.cookie('minimized_filter', true);
      if (window._gaq) {
        _gaq.push(['_trackEvent', 'Filter', 'collapse']);
      }
    });
    return false;
  });

  $('.maximize').live('click', function () {
    $(this).parent('div').animate({ left: '0px'}, 'fast', 'swing', function () {
      $(this).children('.maximize').addClass('minimize').removeClass('maximize');
      $.cookie('minimized_filter', false);
      if (window._gaq) {
        _gaq.push(['_trackEvent', 'Filter', 'expand']);
      }
    });
    return false;
  });
  
  if ($.cookie('minimized_filter') === 'true') {
    $('#sidebar').addClass('minimized')
    $('#sidebar').children('.minimize').addClass('maximize').removeClass('minimize');
  }
  
  $('input.filter').change(function () {
    if ($(this).attr('checked')) {
      removeFilter($(this).attr('rel'), $(this).attr('value'));
    } else {
      addFilter($(this).attr('rel'), $(this).attr('value'));
    }
  });
  
  $('input.filter').each(function() {
    if (FilterSettings.get($(this).attr('rel'), $(this).attr('value')) === true) {
      $(this).attr('checked', false).trigger('change');
    }
  });

  $(window).resize(function () {
    var width = $(window).width() - 600;
    if (width > 100) {
      $('#search').css('width', width + 'px');
    }
  }).resize();
});

function initGeoData() {
  // set global variables
  q = $.parseQuery()
  lat  = q.lat  || $.cookie('last_lat') //|| GeoCache.latlon(request.remote_addr).first};
  lon  = q.lon  || $.cookie('last_lon') //|| GeoCache.latlon(request.remote_addr).last};
  zoom = q.zoom || $.cookie('last_zoom') || 14;
  
  if(!(lat && lon)) {
    // on demand insert JS
    lat = geoip_latitude();
    lon = geoip_longitude();
  }
}


function $w(string) {
  return string.split(' ');
}
