let { Component } = require('react'),
  I18n = require('./common.i18n');

class WidgetEmbed extends Component {
  render() {
    let { width, height, src } = this.props,
      code = `<iframe width="${width}" height="${height}" src="${src}"></iframe>`;

    return (
      <div className="user-widget-embed">
        <h5>
          <I18n scope='users.profile.widget.legends.embed' />
        </h5>
        <textarea rows="3" className="user-widget-embed-code" value={code} />
        <p><I18n scope='users.profile.widget.legends.embed_explanation' /></p>
      </div>
    );
  }
}

export default WidgetEmbed;