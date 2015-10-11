module.exports = React.createClass({
  // propTypes: {
  //   locale: React.PropTypes.integer,
  // },
  getInitialState: function() {
    return {
      features: []
    };
  },

  getFeatureCollection: function (q) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      data: {
        q: q, //this.props.loc,
        lang: this.props.lang,
        limit: this.props.limit
      },
      success: function(data) {
        console.log(data);
        this.setState({features: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  onLocationChange: function (e) {
    this.getFeatureCollection(e.target.value);
  },

  onLocationSelect: function () {
    // lat/lon to
  },

  render: function () {
    return (
      <span className="form-wrapper">
        <input className="form-control" id="widget_center"
          name="widget[center]" type="string"
          defaultValue={this.props.loc} onChange={this.onLocationChange}/>
        <div id="features"></div>
    </span>
    );
  }
});
