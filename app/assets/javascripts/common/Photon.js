import React, { PropTypes } from 'react';
import ReactSelect from 'react-select';

const { func, string, number } = PropTypes;

class Photon extends React.Component {
  static propTypes = {
    onSelectLocation: func.isRequired,
    lang: string.isRequired,
    limit: number.isRequired,
    url: string.isRequired
  };

  static createOptions(features) {
    return features.map(feature => {
      const { properties } = feature;

      return {
        value: properties.osm_id,
        label: Photon.createLabel(feature),
        feature
      };
    });
  }

  static createLabel(feature) {
    const { properties } = feature;
    const street = [ properties.street, properties.housenumber ].filter(val => val).join(' ');

    return [ street, properties.name, properties.state, properties.country ].filter(val => val).join(', ');
  }

  constructor(props) {
    super(props);

    this.state = {
      features: [],
      options: []
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  onSelectChange = (feature, options) => {
    this.props.onSelectLocation(options[0].feature);
  };

  requestFeatures = (search, callback) => {
    const { lang, limit, url } = this.props;

    // Abort old feature request
    if (this.featureRequest != null) {
      this.featureRequest.abort();
    }

    // Remove jQuery
    this.featureRequest = $.ajax({
      url,
      dataType: 'json',
      cache: false,
      data: {
        q: search,
        lang,
        limit
      },
      success: (data) => {
        const { features } = data;

        callback(null, { options: Photon.createOptions(features) });
      }
    });
  };

  render() {
    return (
      <ReactSelect
        defaultValue={this.state.value}
        onChange={this.onSelectChange}
        asyncOptions={this.requestFeatures}
        autoload={false}
        clearable={false}
        {...this.props}
      />
    );
  }
}

export default Photon;
