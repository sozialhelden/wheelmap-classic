const React = require('react');
const { connect } = require('react-redux');
const { Marker } = require('react-leaflet');

const Section = require('./Section');
const SectionModel = require('../models/Section');
const { navigateToNextSection } = require('../reducer');
const Form = require('../../common/Form');
const Alert = require('../../common/Alert');
const MapboxMap = require('../../common/MapboxMap');
const Row = require('../../common/Row');

const { section } = require('../types');
const { func } = React.PropTypes;

class AddressSection extends React.Component {
  static propTypes = {
    section: section,
    onClickNext: func
  };

  render() {
    let { section, onClickAction } = this.props;

    return (
      <Section section={section} onClickAction={onClickAction}>
        <Row>
          <Row.Span rows={6}>
            <Form.ControlGroup label={false}>
              <Form.Controls>
                <Row>
                  <Row.Span rows={3}>
                    <Form.Input name="postcode" placeholderScope="activerecord.attributes.poi.address_postcode"/>
                  </Row.Span>
                  <Row.Span rows={9}>
                    <Form.Input name="city" placeholderScope="activerecord.attributes.poi.address_city"/>
                  </Row.Span>
                </Row>
              </Form.Controls>
              <Form.Controls>
                <Row>
                  <Row.Span rows={10}>
                    <Form.Input name="street" placeholderScope="activerecord.attributes.poi.address_street"/>
                  </Row.Span>
                  <Row.Span rows={2}>
                    <Form.Input name="housenumber" placeholderScope="activerecord.attributes.poi.address_housenumber"/>
                  </Row.Span>
                </Row>
              </Form.Controls>
            </Form.ControlGroup>
            <Alert>
              Du kannst den Marker auf der Karte auf die korrekte Position verschieben.
            </Alert>
          </Row.Span>
          <Row.Span rows={6}>
            <MapboxMap center={[51.505, -0.09]} zoom={13} className="nodes-new-content-section--address-map">
              <Marker position={[51.505, -0.09]}/>
            </MapboxMap>
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

function mapStateToProps(state) {
  return {
    section: state.get('sections').find(section => section.id === SectionModel.ADDRESS)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickAction: (section) => dispatch(navigateToNextSection(section))
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressSection);