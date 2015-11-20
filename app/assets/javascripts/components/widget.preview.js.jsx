module.exports = React.createClass({
  componentDidUpdate: function(nextProps) {
    // Reload iframe
    if (nextProps.reload !== this.props.reload)
      this.refs.iframe.contentWindow.location.reload();
  },

  render: function () {
    let { width, height, src } = this.props;

    // Fore reload of the preview
    //src += '?' + new Date().getTime();

    return (
      <div className="user-widget-preview">
        <h1>changed</h1>
        <h5>
          <Translation scope="users.profile.widget.legends.preview"></Translation>
        </h5>
        <div className="user-widget-preview-area">
          <iframe className="user-widget-preview-frame" ref="iframe" width={width} height={height} src={src} />
        </div>
      </div>
    );
  }
});
