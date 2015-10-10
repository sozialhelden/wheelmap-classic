module.exports = React.createClass({
  // propTypes: {
  //   height: React.PropTypes.integer,
  //   width: React.PropTypes.integer
  // },

  render: function () {
    return (
      <div className="user-widget-embedded">
        <h5>
          <Translations defaultKey={'users.profile.widget.legends.embed'}></Translations>
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
