let { Component } = require('react'),
  setParam = require('mout/queryString/setParam'),
  debounce = require('mout/function/debounce'),
  WidgetForm = require('./widget.form'),
  WidgetEmbed = require('./widget.embed'),
  WidgetPreview = require('./widget.preview');

const DEFAULT_ZOOM = 16;

function buildSrcFromBoundingBox(src, boundingBox) {
  return src + `#/?bbox=${boundingBox[1]},${boundingBox[3]},${boundingBox[0]},${boundingBox[2]}`;
}

function buildSrcFromLatLon(src, latLon) {
  let [lat, lon] = latLon;

  return src + `#/?lat=${lat}&lon=${lon}&zoom=${DEFAULT_ZOOM}`;
}

const MIN_WIDTH = 300;
const MIN_HEIGHT = 300;
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;

class Widget extends Component {
  constructor(props) {
    super(props);

    let src = props.defaultSrc,
      coordinates = [props.defaultLat, props.defaultLon],
      boundingBox = props.defaultBoundingBox;

    if (boundingBox != null)
      src = buildSrcFromBoundingBox(src, boundingBox);
    else {
      src = buildSrcFromLatLon(src, coordinates);
    }

    this.state = {
      width: props.defaultWidth,
      height: props.defaultHeight,
      lat: props.defaultLat,
      lon: props.defaultLon,
      boundingBox: props.defaultBoundingBox,
      providers: props.defaultProviders || [],
      providerId: props.defaultProviderId,
      categories: props.defaultCategory,
      src: src,
      resource: props.defaultResource
    };
  }

  componentDidUpdate(prevProps, prevState) {
    this.debouncedUpdate(prevState);
  }

  handleUpdate(prevState) {
    let { height, width, lat, lon, categories, providerId, boundingBox } = this.state;

    $.ajax({
      url: this.state.resource,
      dataType: 'json',
      type: 'POST',
      data: {
        widget: {
          provider_id: providerId,
          bounding_box: boundingBox,
          height, width, lat, lon, categories
        }
      },
      success: () => {
        if (prevState.lat !== lat || prevState.lon !== lon || prevState.boundingBox !== boundingBox ||
          prevState.categories !== categories || prevState.providerId !== providerId) {
          this.setState({ reload: (new Date).getTime() });
        }
      },
      error: (xhr, status, err) => {
        console.error(status, err.toString());
      }
    });
  }

  componentWillMount() {
    this.debouncedUpdate = debounce(this.handleUpdate, 300);
  }

  onWidthChange = (width) => {
    this.setState({ width });
  };

  onHeightChange = (height) => {
    this.setState({ height });
  };

  onLocationChange = (item) => {
    let boundingBox = item.properties.extent,
      [lon, lat] = item.geometry.coordinates,
      src = this.props.defaultSrc;

    if (boundingBox != null)
      src = buildSrcFromBoundingBox(src, boundingBox);
    else {
      src = buildSrcFromLatLon(src, [lat, lon]);
    }

    this.setState({ lat, lon, boundingBox, src });
  };

  onCategoriesChange = (categories) => {
    this.setState({ categories });
  };

  onProviderChange = (providerId) => {
    this.setState({ providerId });
  };

  render() {
    return (
      <div className="widget-panel">
        <WidgetForm
          defaultWidth={this.state.width}
          defaultHeight={this.state.height}
          minWidth={MIN_WIDTH}
          minHeight={MIN_HEIGHT}
          maxWidth={MAX_WIDTH}
          maxHeight={MAX_HEIGHT}
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
}

Widget.Form = WidgetForm;
Widget.Preview = WidgetPreview;
Widget.Embed = WidgetEmbed;

export default Widget;
