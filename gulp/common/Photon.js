const React = require('react');

let debounce = require('mout/function/debounce'),
  find = require('mout/array/find'),
  ReactSelect = require('react-select');

class Photon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [],
      options: []
    };
  }

  static createOptions(features) {
    return features.map(feature => {
      let { properties } = feature;

      return {
        value: properties.osm_id,
        label: Photon.createLabel(feature),
        feature
      };
    });
  }

  static createLabel(feature) {
    let { properties } = feature,
      street = [properties.street, properties.housenumber].filter(val => val).join(' ');

    return [street, properties.name, properties.state, properties.country].filter(val => val).join(', ');
  }

  shouldComponentUpdate() {
    return false;
  }

  requestFeatures = (search, callback) => {
    // Abort old feature request
    if (this.featureRequest != null)
      this.featureRequest.abort();

    this.featureRequest = $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        q: search,
        lang: this.props.lang,
        limit: this.props.limit
      },
      success: (data) => {
        let { features } = data;

        callback(null, {options: Photon.createOptions(features)});
      }
    });
  };

  onSelectChange = (feature, options) => {
    this.props.onSelectLocation(options[0].feature);
  };

  render() {
    return (
      <ReactSelect defaultValue={this.state.value} onChange={this.onSelectChange}
                   asyncOptions={this.requestFeatures}
                   autoload={false}
                   clearable={false}
        {...this.props} />
    );
  }
}

module.exports = Photon;