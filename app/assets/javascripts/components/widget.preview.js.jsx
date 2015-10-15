module.exports = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    src: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="preview">
        <h5>
          <Translation scope={'users.profile.widget.legends.preview'}></Translation>
        </h5>
        <iframe width={this.props.width} height={this.props.height} src={this.props.src}></iframe>
      </div>
    );
  }
});
