var Toolbar = React.createClass({
  mixins: [Reflux.connect(categoriesStore, 'categories')],

  componentDidMount: function() {
    CategoryActions.load();
  },

  render: function () {
    var categories = this.state.categories;

    var activeCategories = categories.filter(function(category) {
      return category.active;
    });

    /*

     activeCategories = @get('controller.activeCategories')
     length = activeCategories.get('length')

     if length == 1
     I18n.t('poi.category.' + activeCategories.get('firstObject.identifier'))
     else
     I18n.t('header.toolbar.categories')

     */

    var categoryButton = activeCategories.size == 1 ?
      I18n.t('poi.category.' + activeCategories.first().identifier) :
      I18n.t('header.toolbar.categories');

    return (
      <div className="toolbar">
        <div className="toolbar-content">
          <button className="btn btn-info toolbar-toggle-searchbar" data-toggle="searchbar" data-target=".toolbar-searchbar-form">
            <i className="icon-search icon-light"></i>
          </button>
          <form action="/search" className="toolbar-searchbar-form" method="GET">
            <div className="input-append">
              <input id="search" className="search-input" placeholder="Nach Ort suchen" type="text" name="q" autocomplete="off" />
              <button className="btn btn-info" type="submit" value="Finden"><i className="icon-search icon-light"></i></button>
            </div>
          </form>
          <div className="btn-group bootstrap-select show-menu-arrow toolbar-category-filter show-tick">
            <button class="btn dropdown-toggle clearfix btn-info" data-toggle="dropdown">
              <span class="icon-tags"></span>
              <span class="filter-option pull-left">{categoryButton}</span>
              <span class="caret"></span>
              {activeCategories.size > 0 ? <span className="counter">{ activeCategories.size }</span> : null}
            </button>
          </div>
        </div>
      </div>
    );
  }
});