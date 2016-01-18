const React = require('react');
const ReactDOM = require('react-dom');
const map = require('mout/object/map');

class Map extends React.Component {
  static propTypes = {
    accessToken: React.PropTypes.string.isRequired,
    mapId: React.PropTypes.string.isRequired,
    center: React.PropTypes.instanceOf(L.LatLng),
    zoom: React.PropTypes.number,
    options: React.PropTypes.object
  };

  static defaultProps = {
    options: {},
    onZoomEnd: function() {},
    onMoveEnd: function() {}
  };

  componentDidMount() {
    let { mapId, center, zoom, accessToken, options } = this.props;

    let element = ReactDOM.findDOMNode(this),
      map = L.mapbox.map(element, mapId, {
        ...options, accessToken, center, zoom
      });

    map.on({
      zoomend: this.onZoomEnd,
      moveend: this.onMoveEnd
    });

    this._map = map;
  }

  componentWillUnmount() {
    this._map.remove();
  }

  shouldComponentUpdate(nextProps) {
    return !this.props.center.equals(nextProps.center) || this.props.zoom !== nextProps.zoom;
  }

  componentDidUpdate() {
    let { center, zoom } = this.props;

    this._map
      .setView(center, zoom);
  }

  onZoomEnd = () => {
    this.props.onZoomEnd(this._map.getZoom());
  };

  onMoveEnd = () => {
    this.props.onMoveEnd(this._map.getCenter());
  };

  render() {
    return <div {...this.props}/>;
  }
}

module.exports = Map;