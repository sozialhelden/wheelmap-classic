var geojson_layer;
var source = $("#cardTemplate").html();
var template = Handlebars.compile(source);
////GRÜN/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markeryes = new L.LayerGroup();

////ORANGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerlimited = new L.LayerGroup();

////ROT/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerno = new L.LayerGroup();

////GRAU/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerunknown = new L.LayerGroup();

var lat = 52.50521;
var lon = 13.4231;
var zoom = 12;

initGeoData();

var map = L.map('map', {
  center: [lat,lon],
  zoom: zoom,
  trackResize: true
});

L.tileLayer('http://a.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png', {
  maxZoom: 17,
  minZoom: 2,
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  detectRetina: true

}).addTo(map);

var overlays = {
    "markeryes": markeryes,
    "markerlimited": markerlimited,
    "markerno": markerno,
    "markerunknown": markerunknown
};

L.control.layers([], overlays).addTo(map);

var standort = L.icon({
  iconSize:     [1, 1],
  iconAnchor:   [7, 2],
  popupAnchor:  [2, 0],
  iconUrl: '/images/location.png'
});


map.on('popupopen', function(e) {

  $('.tabnav li').click(function() {
    $('.tabnav li').removeClass('active');
    $(this).addClass('active');
  });
  $('.tabnav li:nth-child(1)').click(function() {
    $('.tabs li').removeClass('active');
    $('.tabs li:nth-child(1)').addClass('active');
  });
  $('.tabnav li:nth-child(2)').click(function() {
    $('.tabs li').removeClass('active');
    $('.tabs li:nth-child(2)').addClass('active');
  });
  $('.tabnav li:nth-child(3)').click(function() {
    $('.tabs li').removeClass('active');
    $('.tabs li:nth-child(3)').addClass('active');
  });
   $('.status-show').click(function() {
     $('.status-choose').toggleClass('active');
     $('.button').show();
  });
 $('.status-choose.green').click(function() {
     $('.status-show').toggleClass('yellow');
     $(this).removeClass('active');
  });
  $('.status-choose.yellow').click(function() {
      $('.status-show').removeClass('yellow');
      $('.status-show').toggleClass('green');
      $(this).removeClass('active');
   });
   $('.status-choose.red').click(function() {
       $('.status-show').removeClass('red');
       $('.status-show').toggleClass('yellow');
       $(this).removeClass('active');
    });
  $('.button').click(function() {
      $(this).fadeOut(100);
      $('.success').fadeIn(100).delay(1000).fadeOut(1000);
   });
   $('.grey').click(function() {
       $(this).addClass('first');
       $('.success').fadeIn(100).delay(1000).fadeOut(1000);
       $(this).removeClass('grey');
    });


});


map.on('moveend', function(e) {
  $.cookie('last_lat', map.getCenter().lat, { expires: 7, path: '/'});
  $.cookie('last_lon', map.getCenter().lng, { expires: 7, path: '/'});
  requestNodes(e.target.getBounds());
}).on('zoomend', function(e){
  $.cookie('last_zoom', map.getZoom(), { expires: 7, path: '/'});
}).on('popupopen', function(e) {
  $('.update_form').bind('ajax:success', function(xhr, data, status){
    $('footer').before('<div class="notification">'+ data.message + '</div>')
  }).bind('ajax:error', function(xhr, data, status){
    $('footer').before('<div class="alert">'+ data.message + '</div>')
  });
});

function requestNodes(bounds) {

  var north = bounds._northEast.lat;
  var east  = bounds._northEast.lng;
  var south = bounds._southWest.lat;
  var west  = bounds._southWest.lng;

  var boundbox = [west, south, east, north].join(',')
  $.ajax(
    {
      type: 'GET',
      url: '/nodes.geojson',
      dataType: 'json',
      data: {
        bbox:boundbox,
        limit: 400
      },
      closeOnClick: false,
      load: true,
      contentType: 'application/json; charset=utf-8',
      success: function (result) {
        parseResponse(result)
      },
      error: function (req, status, error) {
        alert('Unable to get node data');
      }
  });
}

function onEachFeature(feature, layer) {
  var popup_html = template(feature.properties);
  layer.bindPopup(popup_html, { closeButton: false, autoPan: false} );
}

function initGeoData() {
  // set global variables
  q = $.parseQuery();
  lat  = q.lat  || $.cookie('last_lat');
  lon  = q.lon  || $.cookie('last_lon');
  zoom = q.zoom || $.cookie('last_zoom') || 14;
  window.node_id = q.node_id

  if(!(lat && lon)) {
    // on demand insert JS
    lat = geoip_latitude();
    lon = geoip_longitude();
  }
}


function parseResponse(data) {
  var new_geojson_layer = new L.GeoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {
        icon: L.divIcon({
          iconSize:     [40, 33],
          iconAnchor:   [6, 12],
          popupAnchor:  [5, 15],
          className: 'wheelchair-' + feature.properties.wheelchair,
          html: '<div class="restaurant"></div>'
        }),
        title: feature.properties.name,
        riseOnHover: true
      });
    },
    onEachFeature: onEachFeature
  });
  map.addLayer(new_geojson_layer);
  if (geojson_layer != undefined)
  {
    map.removeLayer(geojson_layer);
  }
  geojson_layer = new_geojson_layer;
}
