const React = require('react');
const { Map, TileLayer, Marker } = require('react-leaflet');
const { Browser } = require('leaflet');
const Section = require('./nodes.widget_new.section');
const Row = require('./common.row');
const ControlGroup = require('./common.form.control_group');
const Controls = require('./common.form.controls');
const Input = require('./common.form.input');
const Alert = require('./common.alert');

const accessToken = 'pk.eyJ1Ijoic296aWFsaGVsZGVuIiwiYSI6IldvNHpkUUkifQ.5lLzFYw4MmAUkqLMoEcI3g';
const mapId = 'sozialhelden.map-iqt6py1k';

class AddressSection extends React.Component {
  constructor(props) {
    super(props);

    this._rendered = false;
  }

  render() {
    let { section, onClickNext } = this.props,
      map;

    // Render map only when section is active or was once active
    if (this._rendered || section.active) {
      map = (
        <Map center={[51.505, -0.09]} zoom={13} className="nodes-new-content-section--address-map">
          <TileLayer
            url={`https://api.mapbox.com/v4/${mapId}/{z}/{x}/{y}${Browser.retina ? '@2x' : ''}.png?access_token=${accessToken}`}
            attribution='<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'/>
          <Marker position={[51.505, -0.09]}/>
        </Map>
      );

      this._rendered = true;
    }

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
            {map}
          </Row.Span>
        </Row>
      </Section>
    );
  }
}

module.exports = AddressSection;