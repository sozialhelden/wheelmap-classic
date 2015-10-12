module.exports = React.createClass({
  // propTypes: {
  //   defaultWidth: React.PropTypes.number,
  //   defaultHeight: React.PropTypes.number
  // },

  getInitialState: function() {
    return {
      width:  this.props.defaultWidth,
      height: this.props.defaultHeight,
      src:    this.props.defaultSrc,
      resource: this.props.defaultResource
    };
  },

  onHandleUpdate: function (widget) {
    $.ajax({
      url: this.state.resource,
      dataType: 'json',
      type: 'POST',
      data: widget,
      success: function(data) {
        console.log(this.state.url, data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  onWidthChange: function(value) {
    this.setState({width: value});
  },

  onHeightChange: function(value) {
    this.setState({height: value});
  },

  onLocationChange: function(item){
    console.log(item);
    //this.setState({src: src});
  },

  render: function () {
    return (
      <div>
        <WidgetForm
          width={this.state.width}
          height={this.state.height}
          onWidthChange={this.onWidthChange}
          onHeightChange={this.onHeightChange}
          onHandleUpdate={this.onHandleUpdate}
          onLocationChange={this.onLocationChange}
          />
        <WidgetPreview
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
          />
        <WidgetEmbed
          width={this.state.width}
          height={this.state.height}
          src={this.state.src}
        />
      </div>
    );
  }
});
