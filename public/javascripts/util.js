function Lon2Merc(lon) {
  return 20037508.34 * lon / 180;
}

function Lat2Merc(lat) {
    var PI = 3.14159265358979323846;
    lat = Math.log(Math.tan( (90 + lat) * PI / 360)) / (PI / 180);
    return 20037508.34 * lat / 180;
}

/*
 * Einige Funktionen die ursprünglich von http://wiki.openstreetmap.org/wiki/DE:Karte_in_Webseite_einbinden stammen,
 * teilweise modifiziert
 *
 * Some functions from the example at http://wiki.openstreetmap.org/wiki/DE:Karte_in_Webseite_einbinden, some
 * slightly modified
 */
function jumpTo(lon, lat, zoom) {
    var x = Lon2Merc(lon);
    var y = Lat2Merc(lat);
    map.setCenter(new OpenLayers.LonLat(x, y), zoom);
    return false;
}