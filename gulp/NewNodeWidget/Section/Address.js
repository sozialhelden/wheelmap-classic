const React = require('react');
const { bindActionCreators } = require('redux');
const { createStructuredSelector } = require('reselect');
const { connect } = require('react-redux');

const Section = require('./Section');
const { ADDRESS } = require('../models/sections');
const actions = require('../actions');
const selectors = require('../selectors');
const Form = require('../../common/Form');
const Alert = require('../../common/Alert');
const { Map, Marker } = require('../../common/Mapbox');
const Row = require('../../common/Row');
const { nodeTypesSelector } = require('../../common/selectors/nodeTypes');

const { func } = React.PropTypes;

class AddressSection extends React.Component {
  onChange(attr, { target: { value } }) {
    const { node, onNodeChange } = this.props;

    onNodeChange(node.set(attr, value));
  }

  onMapMoved({ target: map }) {
    const { lat, lng: lon } = map.getCenter();

    this.props.onMapMoved({ lat, lon });
  }

  onMapZoomed({ target: map }) {
    this.props.onMapZoomed(map.getZoom());
  }

  onMarkerMoved({ target: marker }) {
    const { lat, lng: lon } = marker.getLatLng();

    this.props.onMarkerMoved({ lat, lon });
  }

  onMapClick({ latlng }) {
    const { lat, lng: lon } = latlng;

    this.props.onMarkerMoved({ lat, lon });
  }

  render() {
    const { node, loading, nodeTypes, errors, mapCenter, mapZoom, onClickAction } = this.props;

    let marker = null;

    if (node.hasLocation()) {
      const nodeType = nodeTypes.find(nodeType => nodeType.identifier === node.nodeType),
        icon = nodeType != null ? nodeType.icon : null;

      marker = <Marker position={[node.lat, node.lon]}
                       draggable={true}
                       onDragEnd={this.onMarkerMoved.bind(this)}
                       wheelchair={node.wheelchair}
                       icon={icon}/>
    }

    const errorAlertElements = [],
      latErrors = errors.get('lat');

    if (latErrors != null) {
      latErrors.forEach((error, index) => {
        errorAlertElements.push(<Alert key={index} type="error">{error}</Alert>);
      });
    }

    return (
      <Section section={ADDRESS} onClickAction={onClickAction} loading={loading}>
        <Row>
          <Row.Span rows={6}>
            <Form.ControlGroup label={false}>
              <Form.Controls>
                <Row>
                  <Row.Span rows={3}>
                    <Form.Input name="postcode"
                                placeholderScope="activerecord.attributes.poi.address_postcode"
                                onChange={this.onChange.bind(this, 'postcode')}
                                value={node.postcode}/>
                  </Row.Span>
                  <Row.Span rows={9}>
                    <Form.Input name="city"
                                placeholderScope="activerecord.attributes.poi.address_city"
                                onChange={this.onChange.bind(this, 'city')}
                                value={node.city}/>
                  </Row.Span>
                </Row>
              </Form.Controls>
              <Form.Controls>
                <Row>
                  <Row.Span rows={10}>
                    <Form.Input name="street"
                                placeholderScope="activerecord.attributes.poi.address_street"
                                onChange={this.onChange.bind(this, 'street')}
                                value={node.street}/>
                  </Row.Span>
                  <Row.Span rows={2}>
                    <Form.Input name="housenumber"
                                placeholderScope="activerecord.attributes.poi.address_housenumber"
                                onChange={this.onChange.bind(this, 'housenumber')}
                                value={node.housenumber}/>
                  </Row.Span>
                </Row>
              </Form.Controls>
            </Form.ControlGroup>
            <Alert>Du kannst den Marker auf der Karte auf die korrekte Position verschieben.</Alert>
            {errorAlertElements}
          </Row.Span>
          <Row.Span rows={6}>
            <Map center={mapCenter}
                       zoom={mapZoom}
                       className="nodes-new-content-section--address-map"
                       onMoveEnd={this.onMapMoved.bind(this)}
                       onZoomEnd={this.onMapZoomed.bind(this)}
                       onClick={this.onMapClick.bind(this)}>
              {marker}
            </Map>
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  node: selectors.node,
  nodeTypes: nodeTypesSelector,
  mapCenter: selectors.mapCenter,
  mapZoom: selectors.mapZoom,
  errors: selectors.errors,
  loading: selectors.loading
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClickAction: actions.navigateToNextSection,
    onNodeChange: actions.changeNodeAddress,
    onMapMoved: actions.changeMapCenter,
    onMapZoomed: actions.changeMapZoom,
    onMarkerMoved: actions.markerMoved
  }, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);