Wheelmap.Toolbar = React.createClass({
  componentDidMount: function() {
    Wheelmap.CategoryActions.load();
  },

  render: function () {
    return (
      <div className="toolbar">
        <div className="toolbar-content">
          <Wheelmap.ToolbarSearch />
          <Wheelmap.ToolbarWheelchairStatus />
          <Wheelmap.ToolbarCategories />
        </div>
      </div>
    );
  }
});