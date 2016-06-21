import React from 'react';
import { Marker as LeafletMarker } from 'react-leaflet';
import { divIcon } from 'leaflet';

const { string } = React.PropTypes;

function Marker({ icon, wheelchair, ...props }) {
  const markerIcon = divIcon({
    iconSize: null,
    iconAnchor: null,
    popupAnchor: null,
    className: `marker-wheelchair-${wheelchair}`,
    html: icon != null ? `<div class="marker-icon marker-icon-${icon}"></div>` : ''
  });

  return <LeafletMarker icon={markerIcon} {...props} />;
}

Marker.propTypes = {
  wheelchair: string.isRequired,
  icon: string
};

export default Marker;
