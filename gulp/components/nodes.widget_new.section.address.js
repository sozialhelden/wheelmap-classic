const React = require('react');
const { connect } = require('react-redux');
const { Marker } = require('react-leaflet');

const Section = require('./nodes.widget_new.section');
const Row = require('./common.row');
const ControlGroup = require('./common.form.control_group');
const Controls = require('./common.form.controls');
const Input = require('./common.form.input');
const Alert = require('./common.alert');
const MapboxMap = require('./common.mapbox_map');
const SectionModel = require('../models/nodes.widget_new.section');
const { navigateToNextSection } = require('../reducers/nodes.widget_new');

const { section } = require('./misc.types');
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
            <ControlGroup label={false}>
              <Controls>
                <Row>
                  <Row.Span rows={3}>
                    <Input name="postcode" placeholderScope="activerecord.attributes.poi.address_postcode"/>
                  </Row.Span>
                  <Row.Span rows={9}>
                    <Input name="city" placeholderScope="activerecord.attributes.poi.address_city"/>
                  </Row.Span>
                </Row>
              </Controls>
              <Controls>
                <Row>
                  <Row.Span rows={10}>
                    <Input name="street" placeholderScope="activerecord.attributes.poi.address_street"/>
                  </Row.Span>
                  <Row.Span rows={2}>
                    <Input name="housenumber" placeholderScope="activerecord.attributes.poi.address_housenumber"/>
                  </Row.Span>
                </Row>
              </Controls>
            </ControlGroup>
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