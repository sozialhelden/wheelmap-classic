#= require routes/map.route

Wheelmap.PopupRoute = Wheelmap.MapRoute.extend
  model: (params, queryParams)->
    self = @

    @get('store').find('node', params.node_id).then(null, ()->
      # if node was not found
      self.transitionTo('index')
    )

  setupController: (controller, model, queryParams)->
    @_super(controller, model, queryParams)

    @controllerFor('map').set('poppingNode', controller)

  renderTemplate: (controller, model)->
    @render 'node-popup',
      outlet: 'popup',
      controller: controller