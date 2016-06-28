Wheelmap.MapRoute = Ember.Route.extend
  model: () ->
    # Load no model.

  setupController: (controller, model)->
    @_super(controller, model)

    toolbarController = @controllerFor('toolbar')

    unless toolbarController.get('model') instanceof DS.PromiseArray
      toolbarController.set('model', @store.findAll('category'))

  renderTemplate: (controller, model)->
    @render 'index',
      outlet: 'map'