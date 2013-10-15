Wheelmap.ToolbarController = Ember.Controller.extend
  needs: 'map'
  statusFilters: ['yes', 'limited', 'no', 'unknown']
  map: Ember.computed.alias('controllers.map')
  _extraFilter: false # Flag for executing special status filter behavior only once

  actions:
    toggleFilter: (wheelchair)->
      statusFilters = @get('statusFilters')

      if !@_extraFilter && statusFilters.length == 4
        # Extra logic if all status filters are set and one is clicked: deactivate the other filters
        statusFilters.clear()
        statusFilters.addObject(wheelchair)
        @_extraFilter = true
      else
        if statusFilters.contains(wheelchair)
          statusFilters.removeObject(wheelchair)
        else
          statusFilters.addObject(wheelchair)

  filterNodes: (()->
    self = @

    @get('map').forEach (node)->
      node.set('isVisible', self.get('statusFilters').contains(node.get('wheelchair')))
  ).observes('map.@each', 'map.@each.wheelchair', 'statusFilters.@each')