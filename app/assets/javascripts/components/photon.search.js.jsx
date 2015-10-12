module.exports = React.createClass({

  onSearchUpdate: function(e){
    this.props.onSearchUpdate(e.target.value);
  },

  render: function () {
    return (
      <span className="form-wrapper">
        <input className="form-control" type="string" id="widget_center"
          defaultValue={this.props.search} onChange={this.onSearchUpdate}/>
      </span>
    );
  }

});
