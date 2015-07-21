Wheelmap.nodesStore = Reflux.createStore({
  listenables: [Wheelmap.NodeActions],

  init: function() {
    this.nodes = Immutable.List();

    this.listenTo(Wheelmap.categoriesStore, this.onToggleByCategories);
  },

  onToggleByCategories: function(categories) {
    this.trigger(this.nodes);
  },

  onToggleByWheelchairStatus: function(status) {
    this.trigger(this.nodes);
  },

  onToggleByToiletStatus: function(status) {
    this.trigger(this.nodes);
  },

  getInitialState: function() {
    return this.nodes;
  }
});