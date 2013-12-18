#= require routes/map.route

Wheelmap.IndexRoute = Wheelmap.MapRoute.extend
  setupMapController: (controller, queryParams)->
    @_super(controller, queryParams)

    controller.set('poppingNode', null)