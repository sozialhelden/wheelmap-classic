const React = require('react');
const { Map, TileLayer } = require('react-leaflet');
const { Browser } = require('leaflet');

function MapboxMap(props) {
  let { children, mapId, accessToken, ...mapProps } = props;

  return (
    <Map {...mapProps}>
      <TileLayer
        url={`https://api.mapbox.com/v4/${mapId}/{z}/{x}/{y}${Browser.retina ? '@2x' : ''}.png?access_token=${accessToken}`}
        attribution='<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'/>
      {children}
    </Map>
  );
}

MapboxMap.propTypes = {
  mapId: React.PropTypes.string.isRequired,
  accessToken: React.PropTypes.string.isRequired
};

MapboxMap.defaultProps = {
  mapId: 'sozialhelden.map-iqt6py1k',
  accessToken: 'pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g'
};

module.exports = MapboxMap;