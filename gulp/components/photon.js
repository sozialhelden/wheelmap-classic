let { Component } = require('react'),
  debounce = require('mout/function/debounce'),
  find = require('mout/array/find'),
  ReactSelect = require('react-select');

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      features: [],
      options: []
    };
  }

  static getOptions(features) {
    return features.map(feature => {
      let { properties } = feature;

      let street = [properties.street, properties.housenumber].filter(val => val).join(' '),
        label = [street, properties.name, properties.state, properties.country].filter(val => val).join(', ');

      return { value: properties.osm_id, label, feature };
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  requestFeatures = (search, callback) => {
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

        callback(null, { options: Wheelmap.Photon.getOptions(features) });
      },
      error: () => {}
    });
  };

  onSelectChange = (feature, options) => {
    this.props.onSelectLocation(options[0].feature);
  };

  render() {
    return (
      <ReactSelect value={this.state.value} onChange={this.onSelectChange}
                   asyncOptions={this.requestFeatures}
                   autoload={false}
                   clearable={false}
                   placeholder={I18n.t('users.profile.widget.empty_center')}
                   searchPromptText={I18n.t('users.profile.widget.empty_center')}/>
    );
  }
};
