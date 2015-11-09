var debounce = require('mout/function/debounce'),
  find = require('mout/array/find'),
  ReactSelect = require('react-select');
  
class Photon extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  constructor(props) {
    super(props);

    this.featureRequest = null;

    this.state = {
      features: [],
      options: []
    };
  }

  requestFeatures(search, callback) {
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

        callback(null, { options: Photon.getOptions(features) });
      },
      error: () => {}
    });
  }

  onSelectChange(feature, options) {
    console.log(options[0].feature);

    this.props.onSelectLocation(options[0].feature);
  }

  render() {
    return (
      <ReactSelect value={this.state.value} onChange={this.onSelectChange.bind(this)}
                   asyncOptions={this.requestFeatures.bind(this)}
                   autoload={false}
                   clearable={false}
                   placeholder={I18n.t('users.profile.widget.empty_center')}
                   searchPromptText={I18n.t('users.profile.widget.empty_center')}/>
    );
  }
}

Photon.getOptions = function(features) {
  return features.map(feature => {
    let { properties } = feature;

    let street = [properties.street, properties.housenumber].filter(val => val).join(' '),
      label = [street, properties.name, properties.state, properties.country].filter(val => val).join(', ');

    return { value: properties.osm_id, label, feature };
  });
};

module.exports = Photon;
