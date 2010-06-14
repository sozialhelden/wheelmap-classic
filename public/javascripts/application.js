var map;
var epsg4326, epsg900913;
var lat = parseFloat(geoip_latitude());
var lon = parseFloat(geoip_longitude());
var zoom = 16;
var places = [];
var mapnik;
var places;
var draggable;
