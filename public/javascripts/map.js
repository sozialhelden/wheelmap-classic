var source = $("#cardTemplate").html();

var lat = 52.50521;
var lon = 13.4231;
var zoom = 12;

initGeoData();

var map = L.map('map', {
  center: [lat,lon],
  zoom: zoom,
  trackResize: true
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 2,
  attribution: '&copy; Data under ODbL by <a href="http://osm.org/copyright">OpenStreetMap</a>, Map Icons Collection CC-By-SA by <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>',
  detectRetina: true

}).addTo(map);

var geojson_layer = L.geoJson(null).addTo(map);

var standort = L.icon({
  iconSize:     [1, 1],
  iconAnchor:   [7, 2],
  popupAnchor:  [10, 20],
  iconUrl: '/images/location.png'
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

function requestNodes(bounds) {
  geojson_layer.fire('data:loading');
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
      },
      complete: function(res) {
        geojson_layer.fire('data:loaded');
      }
  });
}

function onEachFeature(feature, layer) {
  if (feature.properties.name === null) {
    feature.properties.name = I18n.t("poi.name."+feature.properties.category+"."+ feature.properties.type)
  }
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
      $('.status-filter button.active').each(function() {
        var filter_class = $(this).attr('data-value');
        if ( feature.properties.wheelchair === filter_class ) {
          classesToAdd.push('wheelchair_hidden');
        }
      });

      $('.category-filter option:not(:selected)').each(function() {
        var filter_class = $(this).val();
        if ( feature.properties.category === filter_class ) {
          classesToAdd.push('category_hidden');
        }
      });
      return L.marker(latlng, {
        icon: L.divIcon({
          iconSize:     [40, 33],
          iconAnchor:   [14, 30],
          popupAnchor:  [0, -8],
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

$('.status-filter').find('button').button();
$('.status-filter button').each(function(i) {
  $(this).on('change', function(e) {
    var target = $(e.target);
    if (target.is('button')) {
      // OK
    } else {
      target = target.parents('button');
    }
    var filter_class = target.attr('data-value');

    if (target.hasClass('active')) {
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
      $('.leaflet-marker-icon.' + filter_class).removeClass('category_hidden');
      $.removeCookie('filter_'+filter_class);
    } else {
      $.cookie('filter_'+filter_class, '1', { expires: 7, path: '/'});
      $('.leaflet-marker-icon.' + filter_class).addClass('category_hidden');
    }
  })
});

$(document).ready(function() {

  addEventListener("load", function() { setTimeout(hideURLbar, 100); }, false);
  function hideURLbar() {
    window.scrollTo(0,0);
  }
  requestNodes(map.getBounds());
});