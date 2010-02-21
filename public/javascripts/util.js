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
 
function Lon2Merc(lon) {
    return 20037508.34 * lon / 180;
}
 
function Lat2Merc(lat) {
    var PI = 3.14159265358979323846;
    lat = Math.log(Math.tan( (90 + lat) * PI / 360)) / (PI / 180);
    return 20037508.34 * lat / 180;
}
 
function addMarker(layer, lon, lat, popupContentHTML, showPopupOnLoad, iconId) {
 
    // Koordinaten in LonLat umwandeln
    var ll = new OpenLayers.LonLat(Lon2Merc(lon), Lat2Merc(lat));

    // Feature erstellen und konfigurieren (Popup und Marker)
    var feature = new OpenLayers.Feature(layer, ll);
    feature.closeBox = true;
    feature.popupClass = OpenLayers.Class(OpenLayers.Popup.FramedCloud, {minSize: new OpenLayers.Size(200, 120) } );
    feature.data.popupContentHTML = popupContentHTML;
    feature.data.overflow = "auto";
    feature.data.icon = makeIcon(iconId);
 
    // Marker erstellen
    var marker = feature.createMarker();
 
    /*
     * Handler Funktionen für die Mouse-Events
     */
    // Click
    var markerClick = function(evt) {
	// Wenn das Popup nicht sichtbar ist, dann kann es nicht fest sichtbar sein
	if (!this.popup.visible())
		this.popup.clicked = false;
	if (this.popup.clicked == true) {
		this.popup.clicked = false;
		this.popup.hide();
    	}
    	else {
		this.popup.clicked = true;
		if (!this.popup.visible())
			this.popup.show();
	}
        OpenLayers.Event.stop(evt);
    };
    // Hover
    var markerHover = function(evt) {
	// Wenn das Popup nicht sichtbar ist, dann kann es nicht fest sichtbar sein
	if (!this.popup.visible())
		this.popup.clicked = false;
	if (!this.popup.clicked)
		this.popup.show();

	OpenLayers.Event.stop(evt);
    }
    // Hover End
    var markerHoverEnd = function(evt) {
	if (!this.popup.clicked) {
		this.popup.hide();
	}
	OpenLayers.Event.stop(evt);
    }

    // Events auf den Marker registrieren und als Objekt das Feature übergeben
    marker.events.register("mousedown", feature, markerClick);
    if (showPopupOnHover) {
    	marker.events.register("mouseover", feature, markerHover);
    	marker.events.register("mouseout", feature, markerHoverEnd);
    }

    // Erstellten Marker der Ebene hinzufügen
    layer.addMarker(marker);

    // Popup erstellen, der Karte hinzufügen und anzeigen, falls gewünscht
    map.addPopup(feature.createPopup(feature.closeBox));

    if (showPopupOnLoad != true) {
	    // Wenn das Popup nicht angezeigt werden soll, verstecken und auf 'nicht angeklickt' setzen
	    feature.popup.hide();
	    feature.popup.clicked = false;
    } else {
	    // Das Popup wird direkt angezeigt und zwar solange bis man es explizit schließt
	    feature.popup.clicked = true;
    }

    return marker;
}

/*
 *
 * Creates a new marker icon
 *
 * using the icons-array (defined in the html-file)
 *
 * index
 * 0	address to the image
 * 1	width of the image
 * 2	height
 * 3	factor by which the image should be offset horizontally
 * 4	factor by which the image should be offset vertically
 *
 * please see the icon array itself for examples of values
 */
function makeIcon(iconId) {
	var size = new OpenLayers.Size(icons[iconId][1],icons[iconId][2]);
	var offset = new OpenLayers.Pixel(-(size.w*icons[iconId][3]), -(size.h*icons[iconId][4]));
	var icon = new OpenLayers.Icon(icons[iconId][0],size,offset);
	return icon;
}
 
function getCycleTileURL(bounds) {
   var res = this.map.getResolution();
   var x = Math.round((bounds.left - this.maxExtent.left) / (res * this.tileSize.w));
   var y = Math.round((this.maxExtent.top - bounds.top) / (res * this.tileSize.h));
   var z = this.map.getZoom();
   var limit = Math.pow(2, z);
 
   if (y < 0 || y >= limit)
   {
     return null;
   }
   else
   {
     x = ((x % limit) + limit) % limit;
 
     return this.url + z + "/" + x + "/" + y + "." + this.type;
   }
}

/*
 * Funktion zum Zerlegen der URL um die Parameter zu erhalten (für den Permalink)
 * Splits the URL in its parameters
 */
function get_parameters() {
 // erzeugt für jeden in der url übergebenen parameter einen wert
 // bsp: x.htm?nachname=Munch&vorname=Alex&bildfile=wasserfall.jpg  erzeugt
 // variable nachname mit wert Munch  und
 // variable vorname mit wert Alex
 // variable bildfile mit wert wasserfall.jpg
 var hier = document.URL;
 var parameterzeile = hier.substr((hier.indexOf("?")+1));
 var trennpos;
 var endpos;
 var paramname;
 var paramwert;
 var parameters = new Object();
 while (parameterzeile != "") {
  trennpos = parameterzeile.indexOf("=");
  endpos = parameterzeile.indexOf("&");
  if (endpos < 0) { endpos = 500000; }
  paramname = parameterzeile.substr(0,trennpos);
  paramwert = parameterzeile.substring(trennpos+1,endpos);
  parameters[paramname] = paramwert;
  //eval (paramname + " = \"" + paramwert + "\"");
  parameterzeile = parameterzeile.substr(endpos+1);
 }
 return parameters;
}

/*
 * Wie der Name schon sagt ebenfalls für den Permalink, überprüft ob die Parameter in der URL gefunden wurden und überschreibt
 * sie gegebenenfalls.
 * Checks the url for parameters of the permalink and overwrites the default values if necessary.
 */
function checkForPermalink() {
	var parameters = get_parameters();

	if (parameters['zoom'] != null) 
		zoom = parseInt(parameters['zoom']);
	if (parameters['lat'] != null)
		lat = parseFloat(parameters['lat']);
	if (parameters['lon'] != null)
		lon = parseFloat(parameters['lon']);
}
/*
 * Debugging Funktion
 */
function var_dump(obj) {
   if(typeof obj == "object") {
      return "Type: "+typeof(obj)+((obj.constructor) ? "\nConstructor: "+obj.constructor : "")+"\nValue: " + obj;
   } else {
      return "Type: "+typeof(obj)+"\nValue: "+obj;
   }
}//end function var_dump



/*
 * Für den Layer-Switcher mit Buttons
 */
function setLayer(id) {
	if (document.getElementById("layer") != null) {
		for (var i=0;i<layers.length;++i)
			document.getElementById(layers[i][1]).className = "";
	}
	varName = layers[id][0];
	name = layers[id][1];
	map.setBaseLayer(varName);
	if (document.getElementById("layer") != null)
		document.getElementById(name).className = "active";
}
/*
 * Schaltet die Beschreibung der Karte an- und aus.
 * Toggles the description of the map.
 */
function toggleInfo() {
	//var state = document.getElementById('description').className;
	//if (state == 'hide') {
	//	// Info anzeigen
	//	document.getElementById('description').className = '';
	//	document.getElementById('descriptionToggle').innerHTML = text[1];
	//}
	//else {
	//	// Info verstecken
	//	document.getElementById('description').className = 'hide';
	//	document.getElementById('descriptionToggle').innerHTML = text[0];
	//}	
}

/*
 * Zeichnet verschiedene Arten von geometrischen Objekten
 * Draws different kinds of geometric objects
 */

function drawLine(coordinates,style) {
	var linePoints = createPointsArrayFromCoordinates(coordinates);

	var line = new OpenLayers.Geometry.LineString(linePoints);
	var vector = new OpenLayers.Feature.Vector(line,null,style);

	layer_vectors.addFeatures(vector);
	return vector;
}
function drawPolygon(coordinates,style) {
	var points = createPointsArrayFromCoordinates(coordinates);

	var linearRing = new OpenLayers.Geometry.LinearRing(points);
	var polygon = new OpenLayers.Geometry.Polygon([linearRing]);
	var vector = new OpenLayers.Feature.Vector(polygon,null,style);

	layer_vectors.addFeatures(vector);
	return vector;
}
function createPointsArrayFromCoordinates(coordinates) {
	var points = new Array();
	for (var i=0;i<coordinates.length;++i) {
		var lonlat = new OpenLayers.LonLat(coordinates[i][0],coordinates[i][1]).transform(new OpenLayers.Projection("EPSG:4326"),new OpenLayers.Projection("EPSG:900913"))
		points.push(new OpenLayers.Geometry.Point(lonlat.lon,lonlat.lat))
	}
	return points;	
}

/*
 * Gibt eine Fehlermeldung aus, wenn die Version der JavaScript Datei nicht mit der erforderlichen übereinstimmt
 * Outputs an error if the version of the JavaScript-File does not match the required one
 */

function checkUtilVersion(version) {
	var thisFileVersion = 4;
	if (version != thisFileVersion) {
		alert("map.html and util.js versions do not match.\n\nPlease reload the page using your browsers 'reload' feature.\n\nIf the problem persists and you are the owner of this site, you may need to update the map's files.");
	}
}
