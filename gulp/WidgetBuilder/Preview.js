const React = require('react');
const I18n = require('../common/I18n');

class WidgetBuilderPreview extends React.Component {
  shouldComponentUpdate(nextProps) {
    let widget = this.props.widget,
      nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src;
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
          <iframe className="user-widget-preview-frame" width={width} height={height} src={src} />
        </div>
      </div>
    );
  }
}

module.exports = WidgetBuilderPreview;