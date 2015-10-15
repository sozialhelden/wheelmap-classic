var debounce = require('mout/function/debounce');

module.exports = React.createClass({

  keys: {
    up: 38,
    down: 40,
    enter: 13
  },

  getInitialState: function() {
    return {
      data: [],
      selectedItem: -1,
      selection: ''
    };
  },

  handleKeyPress: function (e) {
    console.log(e);
    var key = e.which;
    switch (key) {
      case 38:
        var idx = (this.state.selectedItem+this.state.data.length-1)%this.state.data.length;
        this.setState({selectedItem: idx});
        break;
      case 40:
        var idx = (this.state.selectedItem+1)%this.state.data.length;
        this.setState({selectedItem: idx});
        break;
      case 13:
        break;
      default:
        console.log('key not handled!');
    }
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
    this.debouncedHandleKeyPress = debounce(this.handleKeyPress, 300);
  },

  onLocationChange: function (item, index) {
    this.setState({
      selectedItem: index,
      data: []
    });
    this.props.onLocationChange(item);
  },



  render: function() {
    return (
      <div
        className="number input optional numeric stringish form-group"
        id="widget_center_input">
        <label
          className="control-label"
          htmlFor="widget_center">
          <Translation
            scope={'users.profile.widget.center'}>
          </Translation>
        </label>
        <div className="photon-search-wrapper">
          <Search
            onKeyDown={this.handleKeyPress}
            onKeyPress={this.handleKeyPress}
            onKeyUp={this.handleKeyPress}
            onSearchUpdate={this.debouncedFeatureRequest}>
          </Search>
          <GeoJsonList
            items={this.state.data}
            selectedItem={this.state.selectedItem}
            onSelection={this.onLocationChange}
            show={this.state.data.length > 0}>
          </GeoJsonList>
        </div>
      </div>
    );
  }
});
