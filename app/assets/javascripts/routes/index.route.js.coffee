#= require routes/map.route

Wheelmap.IndexRoute = Wheelmap.MapRoute.extend
  setupController: (controller, model)->
    @_super(controller, model)

    @controllerFor('map').set('poppingNode', null)