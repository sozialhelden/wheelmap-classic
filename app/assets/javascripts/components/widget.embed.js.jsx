module.exports = React.createClass({
  propTypes: {
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    src: React.PropTypes.string
  },

  render: function () {
    return (
      <div className="user-widget-embedded">
        <h5>
          <Translation scope={'users.profile.widget.legends.embed'}></Translation>
        </h5>
        <pre>
          {"<iframe width="  + this.props.width
            +     " height=" + this.props.height
            +     " src="    + this.props.src
            + "/>"}
        </pre>
      </div>
    );
  }
});
