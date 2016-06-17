import React from 'react';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Leaflet from 'react-leaflet';

import Section from './Section';
import { ADDRESS } from '../models/sections';
import actions from '../actions';
import selectors from '../selectors';
import Form from '../../common/Form';
import Alert from '../../common/Alert';
import I18n from '../../common/I18n';
import { Map, Marker } from '../../common/Mapbox';
import Row from '../../common/Row';
import { nodeTypesSelector } from '../../common/selectors/nodeTypes';
import NodeType from '../../common/models/NodeType';
import Node from '../../common/models/Node';
import { immutableMapOf, immutableListOf } from '../../common/propTypes';

const { func, instanceOf, bool, number, string } = React.PropTypes;
const { latlng } = Leaflet.PropTypes;

class AddressSection extends React.Component {
  static propTypes = {
    onClickAction: func.isRequired,
    onNodeChange: func.isRequired,
    onMapMoved: func.isRequired,
    onMapZoomed: func.isRequired,
    onMarkerMoved: func.isRequired,
    node: instanceOf(Node).isRequired,
    loading: bool.isRequired,
    nodeTypes: immutableMapOf(instanceOf(NodeType)).isRequired,
    mapCenter: latlng.isRequired,
    mapZoom: number.isRequired,
    errors: immutableMapOf(immutableListOf(string)).isRequired
  };

  onChange = (attr, { target: { value } }) => {
    const { node, onNodeChange } = this.props;

    onNodeChange(node.set(attr, value));
  };

  onMapMoved = ({ target: map }) => {
    const { lat, lng: lon } = map.getCenter();

    this.props.onMapMoved({ lat, lon });
  };

  onMapZoomed = ({ target: map }) => {
    this.props.onMapZoomed(map.getZoom());
  };

  onMarkerMoved = ({ target: marker }) => {
    const { lat, lng: lon } = marker.getLatLng();

    this.props.onMarkerMoved({ lat, lon });
  };

  onMapClick = ({ latLng }) => {
    const { lat, lng: lon } = latLng;

    this.props.onMarkerMoved({ lat, lon });
  };

  render() {
    const { node, loading, nodeTypes, errors, mapCenter, mapZoom, onClickAction } = this.props;

    let marker = null;

    if (node.hasLocation()) {
      const nodeType = nodeTypes.find(nodeType => nodeType.identifier === node.nodeType);
      const icon = nodeType != null ? nodeType.icon : null;

      marker = (
        <Marker
          position={[ node.lat, node.lon ]}
          draggable
          onDragEnd={this.onMarkerMoved}
          wheelchair={node.wheelchair}
          icon={icon}
        />
      );
    }

    const errorAlertElements = [];
    const latErrors = errors.get('lat');

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
                    <FormInput
                      name="postcode"
                      placeholderScope="activerecord.attributes.poi.address_postcode"
                      onChange={this.onChange}
                      value={node.postcode}
                    />
                  </Row.Span>
                  <Row.Span rows={9}>
                    <FormInput
                      name="city"
                      placeholderScope="activerecord.attributes.poi.address_city"
                      onChange={this.onChange}
                      value={node.city}
                    />
                  </Row.Span>
                </Row>
              </Form.Controls>
              <Form.Controls>
                <Row>
                  <Row.Span rows={10}>
                    <FormInput
                      name="street"
                      placeholderScope="activerecord.attributes.poi.address_street"
                      onChange={this.onChange}
                      value={node.street}
                    />
                  </Row.Span>
                  <Row.Span rows={2}>
                    <FormInput
                      name="housenumber"
                      placeholderScope="activerecord.attributes.poi.address_housenumber"
                      onChange={this.onChange}
                      value={node.housenumber}
                    />
                  </Row.Span>
                </Row>
              </Form.Controls>
            </Form.ControlGroup>
            <Alert><I18n scope="nodes.new.form.section.address.help" /></Alert>
            {errorAlertElements}
          </Row.Span>
          <Row.Span rows={6}>
            <Map
              center={mapCenter}
              zoom={mapZoom}
              className="nodes-new-content-section--address-map"
              onMoveEnd={this.onMapMoved}
              onZoomEnd={this.onMapZoomed}
              onClick={this.onMapClick}
            >
              {marker}
            </Map>
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

class FormInput extends React.Component {
  static propTypes = {
    name: string.isRequired,
    onChange: func.isRequired
  };

  onChange = (event) => {
    const { name, onChange } = this.props;

    onChange(name, event);
  };

  render() {
    return (
      <Form.Input
        {...this.props}
        onChange={this.onChange}
      />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);
