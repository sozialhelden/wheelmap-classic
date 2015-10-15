module.exports = React.createClass({

  onSearchUpdate: function(e){
    this.props.onSearchUpdate(e.target.value);
  },

  render: function () {
    return (
      <span>
        <input {...this.props} className="form-control" type="text" id="widget_center"
          defaultValue={this.props.search} onChange={this.onSearchUpdate}
          autoComplete="off"/>
      </span>
    );
  }

});
