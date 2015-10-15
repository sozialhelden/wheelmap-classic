var setParam = require('mout/queryString/setParam');
var debounce = require('mout/function/debounce');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      width:  this.props.defaultWidth,
      height: this.props.defaultHeight,
      lat: this.props.defaultLat,
      lon: this.props.defaultLon,
      providers: this.props.defaultProviders || [],
      categories: this.props.defaultCategory,
      src:    this.props.defaultSrc,
      resource: this.props.defaultResource
    };
  },

  handleUpdate: function () {
    $.ajax({
      url: this.state.resource,
      dataType: 'json',
      type: 'POST',
      data: {
        widget: {
          height: this.state.height,
          width: this.state.width,
          lat: this.state.lat,
          lon: this.state.lon,
          categories: this.state.categories
        }
      },
      success: function(data) {
        console.log(this.state.url, data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  componentWillMount: function() {
    this.debouncedUpdate = debounce(this.handleUpdate,300);
  },
  onWidthChange: function(value) {
    this.setState({width: value}, this.debouncedUpdate);
  },

  onHeightChange: function(value) {
    this.setState({height: value}, this.debouncedUpdate);
  },

  onLocationChange: function(item){
    this.setState({lat: item.geometry.coordinates[0]}, this.debouncedUpdate);
    this.setState({lon: item.geometry.coordinates[1]}, this.debouncedUpdate);
  },

  onCategoriesChange: function(field, e) {
    var nextState = {};
    nextState[field] = e.target.checked;
    this.setState(nextState, this.debouncedUpdate);
  },

  render: function () {
    return (
      <div className="widget-panel">
        <WidgetForm
          width={this.state.width}
          height={this.state.height}
          categories={this.state.categories}
          providers={this.state.providers}
          onWidthChange={this.onWidthChange}
          onHeightChange={this.onHeightChange}
          onLocationChange={this.onLocationChange}
          onCategoriesChange={this.onCategoriesChange}
          />
        <WidgetPreview
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
          />
        <WidgetEmbed
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
        />
      </div>
    );
  }
});
