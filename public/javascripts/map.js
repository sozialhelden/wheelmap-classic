var geojson_layer;
var source = $("#cardTemplate").html();
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
    $('<div class="notification active success"><span>'+ data.message + '</span></div>').insertAfter('#toolbar .content').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});
  }).bind('ajax:error', function(xhr, data, status){
    $('<div class="notification active success"><span>'+ data.message + '</span></div>').insertAfter('#toolbar .content').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});
  });
});

function by(a, b) {
    return function(f) { return f.properties[a] === b; };
}
function filterby(a, b) {
    return function() { markers.filter(by(a, b)); };
}

function all() { return true; }
function none() { return false; }

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
  var popup_html = L.Util.template(source, feature.properties);
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
      var classesToAdd = [feature.properties.wheelchair, feature.properties.category]
      $('.ort-filter input:checked').each(function() {
        var filter_class = $(this).val();
        if ( feature.properties.wheelchair === filter_class ) {
          classesToAdd.push('wheelchair_hidden');
        }
      });

      $('.category-filter option:selected').each(function() {
        var filter_class = $(this).val();
        if ( filter_class !== 'all' && feature.properties.category !== filter_class ) {
          classesToAdd.push('category_hidden');
        }
      });
      return L.marker(latlng, {
        icon: L.divIcon({
          iconSize:     [40, 33],
          iconAnchor:   [6, 12],
          popupAnchor:  [5, 15],
          className: classesToAdd.join(' '),
          html: '<div id="'+ feature.properties.icon +'" class="icon"></div>'
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

$('.btn-searchbar').click(function() {
	$('.searchbar').toggleClass('active');
});
$('.notification.active').slideDown(500).delay(8000).slideUp(400, function() { $(this).remove()});

$('.ort-filter').each(function(i) {
  $(this).on('change', function(e) {
    var filter_class = $(e.target).val();
    if ($(e.target).is(':checked')) {
      $('.leaflet-marker-icon.' + filter_class).addClass('wheelchair_hidden');
      $.cookie('filter_'+filter_class, '1', { expires: 7, path: '/'});
    } else {
      $.removeCookie('filter_'+filter_class);
      $('.leaflet-marker-icon.' + filter_class).removeClass('wheelchair_hidden');
    }
  });
});

$('.category-filter').on('change', function(e){
  $(e.target).find('option').each(function(i) {
    var filter_class = $(this).val();
    if ( $(this).is(':selected') ) {
      $.cookie('filter_'+filter_class, '1', { expires: 7, path: '/'});
      if (filter_class === 'all') {
        $('.leaflet-marker-icon').removeClass('category_hidden');
      } else {
        $('.leaflet-marker-icon').addClass('category_hidden');
        $('.leaflet-marker-icon.' + filter_class).removeClass('category_hidden');
      }
    } else {
      $.removeCookie('filter_'+filter_class);
    }
  })
});

addEventListener('load', function() { setTimeout(hideURLbar, 100); }, false);
	function hideURLbar() {

  window.scrollTo(0,0);
}
