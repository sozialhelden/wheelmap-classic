Wheelmap.FakeMapRoute = Ember.Route.extend
  renderTemplate: (controller, model)->
    @_super(controller, model)
    
    @render 'fake-map',
      controller: controller
      outlet: 'map'