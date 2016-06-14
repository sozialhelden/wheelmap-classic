const React = require('react');
const I18n = require('../common/I18n');

class WidgetBuilderEmbed extends React.Component {
  shouldComponentUpdate(nextProps) {
    let widget = this.props.widget,
      nextWidget = nextProps.widget;

    return widget.width !== nextWidget.width ||
      widget.height !== nextWidget.height ||
      widget.src !== nextWidget.src;
  }

  render() {
    let { width, height, src } = this.props.widget,
      code = `<iframe width="${width}" height="${height}" src="${src}"></iframe>`;

    return (
      <div className="user-widget-embed">
        <h5>
          <I18n scope='users.profile.widget.legends.embed' />
        </h5>
        <textarea rows="3" className="user-widget-embed-code" value={code} readOnly={true} />
        <p><I18n scope='users.profile.widget.legends.embed_explanation' /></p>
      </div>
    );
  }
}

module.exports = WidgetBuilderEmbed;