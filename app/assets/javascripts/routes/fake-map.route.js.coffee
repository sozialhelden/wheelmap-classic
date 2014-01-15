Wheelmap.FakeMapRoute = Ember.Route.extend
  renderTemplate: (controller, model)->
    @_super(controller, model)

    @render 'fake-map',
      outlet: 'map'