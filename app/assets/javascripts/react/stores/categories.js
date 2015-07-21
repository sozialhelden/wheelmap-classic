Wheelmap.categoriesStore = Reflux.createStore({
  listenables: [Wheelmap.CategoryActions],

  init: function() {
    this.categories = Immutable.List();
  },

  onLoadCompleted: function(categories) {
    this.categories = Immutable.Map().withMutations(function(mutable) {
      categories.forEach(function(category) {
        mutable.set(category.id, new Wheelmap.Category(category));
      });
    });

    this.trigger(this.categories);
  },

  onToggle: function(category) {
    this.categories = this.categories.setIn([category.id, 'active'], !category.active);

    this.trigger(this.categories);
  },

  onToggleAll: function() {
    var active = !this.categories.some(function(category) {
      return category.active;
    });

    this.categories = this.categories.map(function(category) {
      return category.set('active', active);
    });

    this.trigger(this.categories);
  },

  getInitialState: function() {
    return this.categories;
  }
});