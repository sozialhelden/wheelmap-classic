Wheelmap.Map = React.createClass({
  componentDidMount: function() {
    var element = React.findDOMNode(this);

    var map = L.map(element, {
      center: [this.state.lat, this.state.lon],
      zoom: this.state.zoom,
      trackResize: true
    });

    var tileUrl = 'http://{s}.tiles.mapbox.com/v4/' + Wheelmap.MAPBOX_ID +
      '/{z}/{x}/{y}' + (L.Browser.retina ? '@2x' : '') + ".png64?" +
      'access_token=' + Wheelmap.MAPBOX_TOKEN;

    L.tileLayer(tileUrl, {
      maxZoom: 19,
      minZoom: 2,
      attribution: 'Data: <a href="http://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>, ' +
        'Icons: CC-By-SA <a href="http://mapicons.nicolasmollet.com/">Nicolas Mollet</a>'
    }).addTo(map);

    map.attributionControl.setPrefix('');
    L.control.locate().addTo(map);
  },

  getInitialState: function() {
    return {
      lat: 52.50521,
      lon: 13.4231,
      zoom: 12
    };
  },

  render: function () {
    return (
      <div>
        <a href="http://mapbox.com/about/maps/" target="_blank" id="mapbox_logo">MapBox</a>
      </div>
    );
  }
});