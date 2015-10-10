module.exports = React.createClass({
  // propTypes: {
  //   height: React.PropTypes.integer,
  //   width: React.PropTypes.integer
  // },

  render: function () {
    return (
      <div className="preview">
        <h5>
          <Translations defaultKey={'users.profile.widget.legends.preview'}></Translations>
        </h5>
        <iframe width={this.props.width} height={this.props.height} src={this.props.src}></iframe>
      </div>
    );
  }
});
