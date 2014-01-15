Wheelmap.FakeMapRoute = Ember.Route.extend
  renderTemplate: (controller, model)->
    @render 'fake-map',
      outlet: 'map'