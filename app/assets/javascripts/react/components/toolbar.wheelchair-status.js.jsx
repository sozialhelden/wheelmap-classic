Wheelmap.ToolbarWheelchairStatus = React.createClass({
  render: function() {
    var status = ['yes', 'no', 'limited', 'unknown'];

    var buttons = status.map(function(status) {
      return <Wheelmap.ToolbarWheelchairStatusButton status={status} key={status} />
    });

    return (
      <div className="btn-group toolbar-status-filter">
        {buttons}
      </div>
    );
  }
});