#= require routes/map.route

Wheelmap.PopupRoute = Wheelmap.MapRoute.extend
  model: (params)->
    @get('store').find('node', params.node_id)

  renderTemplate: ()->
    @render 'node-popup',
      controller: 'node'
      outlet: 'popup'