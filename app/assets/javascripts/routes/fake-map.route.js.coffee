Wheelmap.FakeMapRoute = Ember.ObjectController.extend
  renderTemplate: (controller, model)->
    @_super(controller, model)
    
    @render 'fake-map',
      controller: controller
      outlet: 'map'