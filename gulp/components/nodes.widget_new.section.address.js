const React = require('react');
const Section = require('./nodes.widget_new.section');
const Row = require('./common.row');
const ControlGroup = require('./common.form.control_group');
const Controls = require('./common.form.controls');
const Input = require('./common.form.input');
const Alert = require('./common.alert');
const Map = require('./map');

class AddressSection extends React.Component {
  render() {
    let { section, onClickNext } = this.props;

    return (
      <Section section={section} onClickNext={onClickNext}>
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
            <Map className="nodes-new-content-section--address-map" accessToken="pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g" mapId="sozialhelden.map-iqt6py1k"/>
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

module.exports = AddressSection;