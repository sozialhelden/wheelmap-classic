Wheelmap.ToolbarWheelchairStatusButton = React.createClass({
  toggleWheelchairStatus: function(status) {
    Wheelmap.NodeActions.toggleByWheelchairStatus(status);

    this.setState({
      active: !this.state.active
    });
  },

  getInitialState: function() {
    return {
      active: true
    };
  },

  render: function() {
    var status = this.props.status,
      active = this.state.active;

    var buttonClassName = 'btn btn-info',
      iconClassName = 'toolbar-status-filter-icon toolbar-status-filter-icon--' + status;

    if (active)
      buttonClassName += ' active';

    return (
      <button className={buttonClassName} onClick={this.toggleWheelchairStatus}>
        <i className={iconClassName}></i>
      </button>
    );
  }
});