var categoriesStore = Reflux.createStore({
  listenables: [CategoryActions],

  init: function() {
    this.categories = Immutable.List();
  },

  onLoadCompleted: function(categories) {
    this.categories = Immutable.List().withMutations(function(mutable) {
      _.forEach(categories, function(category) {
        mutable.push(new Category(category))
      });
    });

    this.trigger(this.categories);
  },

  getInitialState: function() {
    return this.categories;
  }
});