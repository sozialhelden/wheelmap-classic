const React = require('react');
const { Marker: LeafletMarker } = require('react-leaflet');
const { divIcon } = require('leaflet');

const { string } = React.PropTypes;

function Marker({ icon, wheelchair, ...props }) {
  const markerIcon = divIcon({
    iconSize: null,
    iconAnchor: null,
    popupAnchor: null,
    className: `marker-wheelchair-${wheelchair}`,
    html: `<div class="marker-icon marker-icon-${icon}"></div>`
  });

  return <LeafletMarker icon={markerIcon} {...props}/>
}

Marker.propTypes = {
  wheelchair: string.isRequired,
  icon: string.isRequired
};

module.exports = Marker;