var setParam = require('mout/queryString/setParam');
var debounce = require('mout/function/debounce');

function buildSrc(src, lat, lon) {
  return src + `#/?lat=${lat}&lon=${lon}`;
}

module.exports = React.createClass({

  getInitialState: function() {
    return {
      width: this.props.defaultWidth,
      height: this.props.defaultHeight,
      lat: this.props.defaultLat,
      lon: this.props.defaultLon,
      providers: this.props.defaultProviders || [],
      providerId: this.props.defaultProviderId,
      categories: this.props.defaultCategory,
      src: buildSrc(this.props.defaultSrc, this.props.defaultLat, this.props.defaultLon),
      resource: this.props.defaultResource
    };
  },

  handleUpdate: function () {
    console.log(this.state);

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
          categories: this.state.categories,
          provider_id: this.state.providerId
        }
      },
      success: () => {
        // @TODO reload only when necessary
        this.setState({ reload: (new Date).getTime() })
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
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
    let [ lon, lat ] = item.geometry.coordinates,
      src = buildSrc(this.props.defaultSrc, lat, lon);

    this.setState({ lat, lon, src }, this.debouncedUpdate);
  },

  onCategoriesChange: function(field, e) {
    var nextState = {};
    nextState[field] = e.target.checked;
    this.setState(nextState, this.debouncedUpdate);
  },

  onProviderChange: function(providerId) {
    this.setState({providerId}, this.debouncedUpdate);
  },

  render: function () {
    return (
      <div className="widget-panel">
        <WidgetForm
          width={this.state.width}
          height={this.state.height}
          categories={this.state.categories}
          providers={this.state.providers}
          providerId={this.state.providerId}
          onWidthChange={this.onWidthChange}
          onHeightChange={this.onHeightChange}
          onLocationChange={this.onLocationChange}
          onCategoriesChange={this.onCategoriesChange}
          onProviderChange={this.onProviderChange}/>
        <WidgetPreview
          reload={this.state.reload}
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}/>
        <WidgetEmbed
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}/>
      </div>
    );
  }
});
