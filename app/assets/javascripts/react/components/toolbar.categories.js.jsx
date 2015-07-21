Wheelmap.ToolbarCategories = React.createClass({
  mixins: [Reflux.connect(Wheelmap.categoriesStore, 'categories')],

  toggleAll: function() {
    Wheelmap.CategoryActions.toggleAll();
  },

  toggleDropdown: function() {
    this.setState({
      dropdown: !this.state.dropdown
    });
  },

  componentDidMount: function() {
    var element = React.findDOMNode(this);

    this._closeDropdownFromOutside = function(event) {
      if ($(event.target).closest(element).length > 0)
        return;

      this.setState({
        dropdown: false
      });
    }.bind(this);

    document.addEventListener('click', this._closeDropdownFromOutside, true);
  },

  componentWillUnmount: function() {
    document.removeEventListener('click', this._closeDropdownFromOutside);
  },

  getInitialState: function() {
    return {
      dropdown: false
    };
  },

  render: function() {
    var categories = this.state.categories;

    var activeCategories = categories.filter(function(category) {
      return category.active;
    });

    var allCategoriesActive = activeCategories.size > 0,
      filterIconClassName = allCategoriesActive ? 'icon-check-empty' : 'icon-check';

    var categoryButton = activeCategories.size == 1 ?
      I18n.t('poi.category.' + activeCategories.first().identifier) :
      I18n.t('header.toolbar.categories');

    var dropdownClassName = 'btn-group bootstrap-select show-menu-arrow toolbar-category-filter';

    if (this.state.dropdown)
      dropdownClassName += ' open';

    return (
      <div className={dropdownClassName}>
        <button className="btn dropdown-toggle clearfix btn-info" onClick={this.toggleDropdown}>
          <span className="icon-tags"></span>
          <span className="filter-option pull-left">{categoryButton}</span>
          <span className="caret"></span>
          {activeCategories.size > 0 ? <span className="counter">{activeCategories.size}</span> : null}
        </button>
        <ul className="dropdown-menu" role="menu">
          {categories.map(function(category) {
            return <Wheelmap.ToolbarCategory key={category.id} category={category} />
          })}
          <li className="filter clearfix">
            <button className="btn pull-right" onClick={this.toggleAll}><i className={filterIconClassName}></i></button>
          </li>
        </ul>
      </div>
    );
  }
});