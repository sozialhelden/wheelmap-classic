var debounce = require('mout/function/debounce');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      data: [],
      selectedItem: -1
    };
  },

  handleFeaturesRequest: function (search) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        q: search,
        lang: this.props.lang,
        limit: this.props.limit
      },
      success: function(data) {
        this.setState({selectedItem: -1});
        this.setState({data: data.features});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount: function() {
    this.debouncedFeatureRequest = debounce(this.handleFeaturesRequest,300);
  },

  onLocationChange: function (item, index) {
    this.setState({selectedItem: index});
    //var request = debounce(this.handleFeaturesRequest, 300);
    this.props.onLocationChange(item);
  },

  render: function() {
    return (
      <div className="number input optional numeric stringish form-group"
        style={{position: 'relative'}}
        id="widget_center_input">
        <label className=" control-label" htmlFor="widget_center">
          <Translations
            defaultKey={'users.profile.widget.center'}>
          </Translations>
        </label>
        <PhotonSearch onSearchUpdate={this.debouncedFeatureRequest}></PhotonSearch>
        <PhotonFeatures items={this.state.data}
          selectedItem={this.state.selectedItem}
          onSelection={this.onLocationChange}>
        </PhotonFeatures>
      </div>
    );
  }
});
