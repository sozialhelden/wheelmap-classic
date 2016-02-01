const React = require('react');
const { connect } = require('react-redux');
const { Marker } = require('react-leaflet');

const Section = require('./Section');
const { ADDRESS } = require('../models/sections');
const { navigateToNextSection, changeNodeAddress } = require('../actions');
const { nodeSelector } = require('../selectors');
const Form = require('../../common/Form');
const Alert = require('../../common/Alert');
const MapboxMap = require('../../common/MapboxMap');
const Row = require('../../common/Row');

const { func } = React.PropTypes;

class AddressSection extends React.Component {
  static propTypes = {
    onClickNext: func
  };

  render() {
    const { onClickAction, node, onChangePostcode, onChangeCity, onChangeStreet, onChangeHousenumber } = this.props;

    const center = [node.lat, node.lon];

    return (
      <Section section={ADDRESS} onClickAction={onClickAction}>
        <Row>
          <Row.Span rows={6}>
            <Form.ControlGroup label={false}>
              <Form.Controls>
                <Row>
                  <Row.Span rows={3}>
                    <Form.Input name="postcode"
                                placeholderScope="activerecord.attributes.poi.address_postcode"
                                onChange={onChangePostcode}
                                value={node.postcode}/>
                  </Row.Span>
                  <Row.Span rows={9}>
                    <Form.Input name="city"
                                placeholderScope="activerecord.attributes.poi.address_city"
                                onChange={onChangeCity}
                                value={node.city}/>
                  </Row.Span>
                </Row>
              </Form.Controls>
              <Form.Controls>
                <Row>
                  <Row.Span rows={10}>
                    <Form.Input name="street"
                                placeholderScope="activerecord.attributes.poi.address_street"
                                onChange={onChangeStreet}
                                value={node.street}/>
                  </Row.Span>
                  <Row.Span rows={2}>
                    <Form.Input name="housenumber"
                                placeholderScope="activerecord.attributes.poi.address_housenumber"
                                onChange={onChangeHousenumber}
                                value={node.housenumber}/>
                  </Row.Span>
                </Row>
              </Form.Controls>
            </Form.ControlGroup>
            <Alert>
              Du kannst den Marker auf der Karte auf die korrekte Position verschieben.
            </Alert>
          </Row.Span>
          <Row.Span rows={6}>
            <MapboxMap center={center} zoom={13} className="nodes-new-content-section--address-map">
              <Marker position={center}/>
            </MapboxMap>
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    node: nodeSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(navigateToNextSection(section)),
    onChangePostcode: (event) => dispatch(changeNodeAddress('postcode', event.target.value)),
    onChangeCity: (event) => dispatch(changeNodeAddress('city', event.target.value)),
    onChangeStreet: (event) => dispatch(changeNodeAddress('street', event.target.value)),
    onChangeHousenumber: (event) => dispatch(changeNodeAddress('housenumber', event.target.value))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);