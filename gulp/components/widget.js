import { Component } from 'react';
import { connect } from 'react-redux';
import setParam from 'mout/queryString/setParam';
import debounce from 'mout/function/debounce';
import Form from './widget.form';
import Embed from './widget.embed';
import Preview from './widget.preview';
import App from './widget.app';
import { updateWidget } from '../actions/widget';

/*const DEFAULT_ZOOM = 16;

function buildSrcFromBoundingBox(src, boundingBox) {
  return src + `#/?bbox=${boundingBox[1]},${boundingBox[3]},${boundingBox[0]},${boundingBox[2]}`;
}

function buildSrcFromLatLon(src, latLon) {
  let [lat, lon] = latLon;

  return src + `#/?lat=${lat}&lon=${lon}&zoom=${DEFAULT_ZOOM}`;
}*/

class Widget extends Component {
  componentShouldUpdate(nextProps) {
    return this.props.widget !== nextProps.widget;
  }

  /*constructor(props) {
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
  }*/

  /*componentDidUpdate(prevProps, prevState) {
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
  };*/

  render() {
    return (
      <div className="widget-panel">
        <Form widget={this.props.widget} onChange={this.onChange} />
        <Preview widget={this.props.widget} />
        <Embed widget={this.props.widget} />
      </div>
    );
  }
}

Widget.Form = Form;
Widget.Preview = Preview;
Widget.Embed = Embed;
Widget.App = App;

function mapStateToProps(state) {
  return {
    widget: state.widget
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: widget => dispatch(updateWidget(widget))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
