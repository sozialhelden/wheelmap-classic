let { Component } = require('react'),
  I18n = require('./common.i18n');

export default class extends Component {
  componentDidUpdate(nextProps) {
    // Reload iframe
    if (nextProps.reload !== this.props.reload)
      this.refs.iframe.contentWindow.location.reload();
  }

  render() {
    let { width, height, src } = this.props;

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
};