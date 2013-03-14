////GRÜN/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markergreen = L.icon({
	iconSize:     [32, 26],
	iconAnchor:   [6, 12],
	popupAnchor:  [5, -15],
	iconUrl: '/images/marker_yes.png'
});
var markeryes = new L.LayerGroup();
L.marker([52.51539, 13.42126], {icon: markergreen})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show green"></div><div class="status-choose green"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markeryes),
L.marker([52.50933, 13.43388], {icon: markergreen})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show green"></div><div class="status-choose green"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markeryes);

////ORANGE/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerorange = L.icon({
	iconSize:     [32, 26],
	iconAnchor:   [6, 12],
	popupAnchor:  [5, -15],
	iconUrl: '/images/marker_limited.png'
});
var markerlimited = new L.LayerGroup();
L.marker([52.514, 13.44], {icon: markerorange})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show yellow"></div><div class="status-choose yellow"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerlimited),
L.marker([52.52, 13.44], {icon: markerorange})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show yellow"></div><div class="status-choose yellow"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerlimited);

////ROT/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markerred = L.icon({
	iconSize:     [32, 26],
	iconAnchor:   [6, 12],
	popupAnchor:  [5, -15],
	iconUrl: '/images/marker_no.png'
});
var markerno = new L.LayerGroup();
L.marker([52.52123, 13.42538], {icon: markerred})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show red"></div><div class="status-choose red"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerno),
L.marker([52.50833, 13.41396], {icon: markerred})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="first active"><div class="status"><div class="status-show red"></div><div class="status-choose red"></div></div><div class="button"></div><a href="detail.html" class="linktoedit"></a></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerno);

////GRAU/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var markergrey = L.icon({
	iconSize:     [32, 26],
	iconAnchor:   [6, 12],
	popupAnchor:  [5, -15],
	iconUrl: '/images/marker_unknown.png'
});
var markerunknown = new L.LayerGroup();
L.marker([52.50912, 13.44452], {icon: markergrey})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="grey active"><div class="status"><div class="status-show green"></div><div class="status-choose green"></div></div><div class="button"></div></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerunknown),
L.marker([52.50713, 13.4234], {icon: markergrey})
	.bindPopup('<div class="popup-content"><div class="success">Erfolgreich geändert</div><a href="liste.html" class="linktolist"></a><ul class="tabs"><li class="grey active"><div class="status"><div class="status-show green"></div><div class="status-choose green"></div></div><div class="button"></div></li><li class="second"><a href="detail.html" class="linktoedit"></a></li><li class="third"><a href="detail.html" class="linktoedit"></a><a href="detail.html" class="linktomore"></a></li></ul><ul class="tabnav"><li class="active">Übersicht</li><li>Fotos</li><li>mehr Infos</li></ul></div>').addTo(markerunknown);



var map = L.map('map', {
			center: [52.50521, 13.4231],
			zoom: 12,
			layers: [markeryes,markerlimited,markerno,markerunknown]
	});

L.tileLayer('http://a.tiles.mapbox.com/v3/sozialhelden.map-iqt6py1k/{z}/{x}/{y}.png', {
	maxZoom: 17,
	minZoom: 2,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

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


//function onLocationFound(e) {
//			var radius = e.accuracy / 2;
//
//			L.marker(e.latlng, {icon: standort}).addTo(map)
//				.bindPopup("<strong>Dein Standort:<br/><i>Ungefähr " + radius + " Meter genau</i></strong>").openPopup();
//
//			L.circle(e.latlng, radius, {color: '#384C60'}).addTo(map);
//		}
//
//		function onLocationError(e) {
//			alert(e.message);
//		}
//
//		map.on('locationfound', onLocationFound);
		//map.on('locationerror', onLocationError);
//
//		map.locate({setView: true, maxZoom: 14});



//	var popup = L.popup();
//
//		function onMapClick(e) {
//			popup
//				.setLatLng(e.latlng)
//				.setContent("You clicked the map at " + e.latlng.toString())
//				.openOn(map);
//		}
//
//		map.on('click', onMapClick);
//
