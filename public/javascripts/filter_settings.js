FilterSettings = {
  get: function(filter_name, subfilter_name) {
    var filter = $.cookie('filter') || "{}";
    var filter_settings = JSON.parse(filter);
    var subfilter = filter_settings[filter_name] || {}
    filter_settings[filter_name] = subfilter;
    return filter_settings[filter_name][subfilter_name];
  },
  
  set: function(filter_name, subfilter_name, value) {
    var filter = $.cookie('filter') || "{}";
    var filter_settings = JSON.parse(filter);
    var subfilter = filter_settings[filter_name] || {};
    filter_settings[filter_name] = subfilter;
    filter_settings[filter_name][subfilter_name] = value;
    $.cookie('filter', JSON.stringify(filter_settings));
  }
}