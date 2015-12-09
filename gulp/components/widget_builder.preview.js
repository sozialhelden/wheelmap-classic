let { Component } = require('react'),
  I18n = require('./common.i18n');

class WidgetBuilderPreview extends Component {
  shouldComponentUpdate(nextProps) {
    let widget = this.props.widget,
      nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src;
  }

  componentDidUpdate(nextProps) {
    // Reload iframe
    //this.refs.iframe.contentWindow.location.reload();
  }

  render() {
    let { width, height, src } = this.props.widget;

    // Fore reload of the preview
    //src += '?' + new Date().getTime();

    return (
      <div className="user-widget-preview">
        <h5>
          <I18n scope="users.profile.widget.legends.preview" />
        </h5>
        <div className="user-widget-preview-area">
          <iframe className="user-widget-preview-frame" ref="iframe" width={width} height={height} src={src} />
        </div>
      </div>
    );
  }
}

export default WidgetBuilderPreview;