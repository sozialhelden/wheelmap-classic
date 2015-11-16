module.exports = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    src: React.PropTypes.string
  },

  render: function () {
    let { width, height, src } = this.props,
      code = `<iframe width="${width}" height="${height}" src="${src}"></iframe>`;

    return (
      <div className="user-widget-embed">
        <h5>
          <Translation scope='users.profile.widget.legends.embed' />
        </h5>
        <pre className="user-widget-embed-code">{code}</pre>
        <p><Translation scope='users.profile.widget.legends.embed_explanation' /></p>
      </div>
    );
  }
});
