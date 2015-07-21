Wheelmap.ToolbarCategory = React.createClass({
  toggle: function() {
    Wheelmap.CategoryActions.toggle(this.props.category);
  },

  render: function() {
    var category = this.props.category,
      className = null;

    if (category.active)
      className = 'selected';

    return (
      <li className={className}>
        <a onClick={this.toggle}>
          {I18n.t('poi.category.' + category.identifier)}
          <i className="icon-ok pull-right check-mark"></i>
        </a>
      </li>
    );
  }
});