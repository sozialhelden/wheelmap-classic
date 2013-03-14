String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined'
      ? args[number]
      : match
    ;
  });
};

var geojson_layer;
////GRÜN/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markergreen = L.divIcon({
  iconSize:     [32, 26],
  iconAnchor:   [6, 12],
  popupAnchor:  [5, -15],
  iconUrl: '/images/marker_yes.png',
  className: 'wheelchair-yes'
});
var markeryes = new L.LayerGroup();

////ORANGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerorange = L.divIcon({
  iconSize:     [32, 26],
  iconAnchor:   [6, 12],
  popupAnchor:  [5, -15],
  iconUrl: '/images/marker_limited.png',
  className: 'wheelchair-limited'
});
var markerlimited = new L.LayerGroup();

////ROT/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerred = L.divIcon({
  iconSize:     [32, 26],
  iconAnchor:   [6, 12],
  popupAnchor:  [5, -15],
  iconUrl: '/images/marker_no.png',
  className: 'wheelchair-no'
});
var markerno = new L.LayerGroup();

////GRAU/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markergrey = L.divIcon({
  iconSize:     [32, 26],
  iconAnchor:   [6, 12],
  popupAnchor:  [5, -15],
  iconUrl: '/images/marker_unknown.png',
  className: 'wheelchair-unknown'
});
var markerunknown = new L.LayerGroup();

var map = L.map('map', {
  center: [52.50521, 13.4231],
  zoom: 12,
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
  requestNodes(e.target.getBounds());
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
        limit: 300
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

var featureStyle = {
  icon: markergreen
};

function onEachFeature(feature, layer) {
  var cardTemplate = $("#cardTemplate").html();
  var template = cardTemplate.format(feature.properties.icon, feature.properties.name, feature.properties.address, feature.properties.id);
  layer.bindPopup(template);
}

function parseResponse(data) {
  var new_geojson_layer = new L.GeoJSON(data, {
    pointToLayer: function (feature, latlng) {
      switch (feature.properties.wheelchair) {
        case 'yes': return L.marker(latlng, {icon: markergreen, title: feature.properties.name, riseOnHover: true});
        case 'limited': return L.marker(latlng, {icon: markerorange, title: feature.properties.name, riseOnHover: true});
        case 'no': return L.marker(latlng, {icon: markerred, title: feature.properties.name, riseOnHover: true});
        case 'unknown': return L.marker(latlng, {icon: markergrey, title: feature.properties.name, riseOnHover: true});
      }
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

//function onLocationFound(e) {
//      var radius = e.accuracy / 2;
//
//      L.marker(e.latlng, {icon: standort}).addTo(map)
//        .bindPopup("<strong>Dein Standort:<br/><i>Ungefähr " + radius + " Meter genau</i></strong>").openPopup();
//
//      L.circle(e.latlng, radius, {color: '#384C60'}).addTo(map);
//    }
//
//    function onLocationError(e) {
//      alert(e.message);
//    }
//
//    map.on('locationfound', onLocationFound);
    //map.on('locationerror', onLocationError);
//
//    map.locate({setView: true, maxZoom: 14});

