var map;
var epsg4326, epsg900913;
if (typeof(lat) == 'undefined'){
  var lat = parseFloat(geoip_latitude());
}
if (typeof(lon) == 'undefined'){
  var lon = parseFloat(geoip_longitude());
}
var zoom = 16;
var places = [];
var mapnik;
var places;
var draggable;
