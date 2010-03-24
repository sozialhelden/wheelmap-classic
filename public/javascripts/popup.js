var selectedFeature, selectControl, popup;


var tagFunctions = {
  phone: function(tag) {
    return popupHTMLTag('Telefon', tag);
  },
  
  website: function(tag) {
    var link = '<a href="' + tag + '">' + tag.replace(/https?:\/\//, '') + '</a>';
    return popupHTMLTag('Website', link);
  },
    
  collection_times: function(tag) {
    var days = tag.split(';'),
        matches;
    for (var i in days) {
      matches = days[i].match(/(\w+)(-(\w+))?\s*([0-9:,]+)/)
      days[i] = '<strong>' + matches[1] + (matches[3] ? ' &ndash; ' + matches[3] : '') + ':</strong> ' +
                matches[4].replace(/\s*,\s*/g, ', ');
    }
    return popupHTMLTag('Leerzeiten', days.join('<br>'));
  },
  
  opening_hours: function(tag) {
    var days = tag.split(';'),
        matches;
    for (var i in days) {
      matches = days[i].match(/(\w+)(-(\w+))?\s*([0-9x\*:,]+)/)
      days[i] = '<strong>' + matches[1] + (matches[3] ? ' &ndash; ' + matches[3] : '') + ':</strong> ' +
                matches[4].replace(/\s*,\s*/g, ', ').replace(/\s*-\s*/g, ' &ndash; ');
    }
    return popupHTMLTag('Öffnungszeiten', days.join('<br>'));
  },
  
  'club-mate': function(tag) {
    return popupYesNoHTMLTag('Club-Mate', tag);
  },
    
  religion: function (tag) {
    return popupHTMLTag('Religion', tag);
  },
      
  capacity: function (tag) {
    return popupHTMLTag('Kapazität', tag);
  },
                
  fee: function (tag) {
    return popupYesNoHTMLTag('Kostenplichtig', tag);
  },
    
  charge: function (tag) {
    return popupHTMLTag('Gebühren', tag);
  },
    
  operator: function (tag) {
    return popupHTMLTag('Betreiber', tag);
  },
    
  cuisine: function (tag) {
    return popupHTMLTag('Küche', tag);
  },

  'payment:coins': function (tag) {
    return popupYesNoHTMLTag('Münzen', tag);
  },

  'payment:telephone_cards': function (tag) {
    return popupYesNoHTMLTag('Telefonkarten', tag);
  },

  'atm': function (tag) {
    return popupYesNoHTMLTag('Geldautomat', tag);
  },

  'centralkey': function (tag) {
    return popupHTMLTag('Zentralschlüssel', tag);
  }
};


function tagList(tags) {
  var list = [];
  $.each(tags, function(key, value) {
    if (tagFunctions[key]) {
      list.push(tagFunctions[key](value));
    }
  });
  return list.length ? '<dl>' + list.join('') + '</dl>' : '';
}


function onPopupClose(evt) {
    selectControl.unselect(selectedFeature);
}


function openPopup(feature) {
  if (popup) {
    closePopup(selectedFeature);
  }
  selectedFeature = feature;
  
  var node = feature.attributes;
  if (location.hostname == 'localhost') {
    console.log(node.tags);
  }
  
  popup = new OpenLayers.Popup.FramedCloud("Popup", 
                           feature.geometry.getBounds().getCenterLonLat(),
                           null,
                           popupHTML(node),
                           null, true, onPopupClose);
  feature.popup = popup;
  map.addPopup(popup);
}


function closePopup(feature) {
  map.removePopup(feature.popup);
  feature.popup.destroy();
  feature.popup = null;
  popup = null;
}    


function popupHTML(node) {
  var result = '<h2 class="' + node.type + '">' + (node.name || node.type) + '</h2>';
  result += addressOfNode(node);
  result += tagList(node.tags);
  result = '<div class="popup">' + result + '</div>';
  return result;
}


function popupHTMLTag(key, value) {
  return '<dt>' + key + '</dt><dd>' + value + '</dd>';
}


function popupYesNoHTMLTag(key, value) {
  return popupHTMLTag(key, value == 'yes' ? 'Ja' : 'Nein');
}


function addressOfNode(node) {
  var address = [], tags = node.tags;
  if (tags['addr:street']) {
    address.push((tags['addr:street'] + ' ' + tags['addr:housenumber']).strip());
  }
  if (tags['addr:city'] || tags['addr:postcode']) {
    address.push((tags['addr:postcode'] + ' ' + tags['addr:city']).strip());
  }
  return address.length ? '<address>' + address.join(', ') + '</address>' : '';
}