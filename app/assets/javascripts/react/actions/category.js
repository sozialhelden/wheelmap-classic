var CategoryActions = Reflux.createActions({
  load: { asyncResult: true }
});

CategoryActions.load.listen(function() {
  var action = this;

  $.get('/categories.json')
    .then(function(response) {
      action.completed(response.categories);
    })
    .fail(action.failed)
});