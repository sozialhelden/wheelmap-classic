const React = require('react');
const I18n = require('../common/I18n');

const { widget } = require('./propTypes');

class WidgetBuilderPreview extends React.Component {
  static propTypes = {
    widget: widget.isRequired
  };

  shouldComponentUpdate(nextProps) {
    const widget = this.props.widget;
    const nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src ||
      widget.categories !== nextWidget.categories;
  }

  componentDidUpdate(prevProps) {
    const widget = this.props.widget;
    const prevWidget = prevProps.widget;

    if (widget.src !== prevWidget.src || widget.categories !== prevWidget.categories) {
      this.refs.iframe.contentWindow.location.reload();
    }
  }

  render() {
    let { width, height, src } = this.props.widget;

    return (
      <div className="user-widget-preview">
        <h5>
          <I18n scope="users.profile.widget.legends.preview" />
        </h5>
        <div className="user-widget-preview-area">
          <iframe className="user-widget-preview-frame" width={width} height={height} src={src} ref="iframe" />
        </div>
      </div>
    );
  }
}

export default WidgetBuilderPreview;
