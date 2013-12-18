#= require routes/map.route

Wheelmap.PopupRoute = Wheelmap.MapRoute.extend
  model: (params)->
    @get('store').find('node', params.node_id)

  setupController: (controller, model, queryParams)->
    @_super(controller, model, queryParams)

    @controllerFor('map').set('poppingNode', controller)

  renderTemplate: (controller, model)->
    @render 'node-popup',
      outlet: 'popup',
      controller: controller