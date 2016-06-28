#= require routes/map.route

Wheelmap.PopupRoute = Wheelmap.MapRoute.extend
  model: (params)->
    @get('store').find('node', params.nodeId)

  setupController: (controller, model)->
    @_super(controller, model)

    @controllerFor('map').set('poppingNode', controller)

  renderTemplate: (controller, model)->
    @_super(controller, model)

    @render 'node-popup',
      controller: controller
      outlet: 'map-popup'

  actions:
    willTransition: (transition)->
      @controllerFor('popup').resetStatus()

      return true