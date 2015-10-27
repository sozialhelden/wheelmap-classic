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
    this.props.onSelectLocation(options[0].feature);
  }

  render() {
    console.log(this.props.value);

    return (
      <div className="form-group" id="widget_center_input">
        <label className="control-label" htmlFor="widget_center">
          <Translation scope={'users.profile.widget.center'}/>
        </label>

        <div className="form-wrapper">
          <ReactSelect value={this.state.value} onChange={this.onSelectChange.bind(this)}
                       asyncOptions={this.requestFeatures.bind(this)}
                       autoload={false}
                       clearable={false} />
          {/*<Search
           onKeyUp={this.handleKeyPress}
           onSearchUpdate={this.debouncedFeatureRequest}>
           </Search>
           <GeoJsonList
           items={this.state.data}
           selectedItem={this.state.selectedItem}
           onSelection={this.onLocationChange}
           show={this.state.data.length > 0}>
           </GeoJsonList>*/}
        </div>
      </div>
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
