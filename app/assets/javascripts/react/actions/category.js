Wheelmap.CategoryActions = Reflux.createActions({
  load: { asyncResult: true },
  toggle: {},
  toggleAll: {}
});

Wheelmap.CategoryActions.load.listen(function() {
  var action = this;

  $.get('/categories.json')
    .then(function(response) {
      action.completed(response.categories);
    })
    .fail(action.failed)
});