
$(function() {
  var input = $('#search');
  var list = $('header form ol');
  
  var showSearchResults = function(data) {
    var xml = $(data.responseXML),
        places = xml.find('place');
    
    list.html('').animate({ height: 20 * (places.length || 1) + 'px' }, function() { list.removeClass('loading'); });
    
    if (places.length == 0) {
      list.append('<li>Leider nichts gefunden</li>');
      return;
    }
        
    places.each(function(i, place) {
      place = $(place);
      var type = place.attr('type').replace(/_/g, '-'),
          name = place.attr('display_name');
      if (type == 'station') {
        if (name.match(/^S /)) {
          type = 'light-rail';
        }
        else if (name.match(/^U /)) {
          type = 'subway';
        }
      }
      var html = '<li><a href="#"' +
        ' data-osm-id="' + place.attr('osm_id') + '"' +
        ' data-lon="' + place.attr('lon') + '"' +
        ' data-lat="' + place.attr('lat') + '"' +
        ' data-display-name="' + name + '"' +
        ' class="' + type + '"' +
        '>' + place.attr('display_name') + '</a></li>';
      list.append(html);
    });
    
    list.find('a').first().click();
  };
  
  var search = function() {
    list.html('').animate({ height: '20px' }).addClass('loading');
    var q = input.val();
    $.ajax({ url: '/search.xml?q=' + q, complete: showSearchResults });
  };
  
  input.keypress(function(event) {
    if (event.keyCode == '13') {
      search();
      event.preventDefault();
    }
  });
  
  list.delegate('a', 'click', function() {
    var element = $(this);
    if (element.attr('class')) {
      jumpTo(element.attr('data-lon') * 1.0, element.attr('data-lat') * 1.0, zoom);
      loadPlaces();
    }
    return false;
  });
});