Wheelmap.MapRoute = Ember.Route.extend
  setupController: (controller, model)->
    @_super(controller, model)

    @controllerFor('toolbar').set('content', @store.findAll('category'))

  renderTemplate: (controller, model)->
    @render 'index',
      outlet: 'map'