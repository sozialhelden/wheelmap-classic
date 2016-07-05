import React, { PropTypes } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import { Browser } from 'leaflet';

const { string, any } = PropTypes;

function Map(props) {
  const { children, mapId, accessToken, ...mapProps } = props;

  const url = `https://api.mapbox.com/v4/${mapId}/{z}/{x}/{y}` +
    `${Browser.retina ? '@2x' : ''}.png?access_token=${accessToken}`;

  return (
    <LeafletMap {...mapProps}>
      <TileLayer
        url={url}
        attribution='<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
      />
      {children}
    </LeafletMap>
  );
}

Map.propTypes = {
  mapId: string.isRequired,
  accessToken: string.isRequired,
  children: any
};

Map.defaultProps = {
  mapId: 'sozialhelden.map-iqt6py1k',
  accessToken: 'pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g'
};

export default Map;
