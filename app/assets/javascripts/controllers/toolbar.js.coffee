Wheelmap.ToolbarController = Ember.Controller.extend
  needs: 'map'
  statusFilters: ['yes', 'limited', 'no', 'unknown']
  searchString: null,
  _extraFilter: false # Flag for executing special status filter behavior only once

  init: ()->
    @_super()

    if $.cookie('last_status_filters')
      @set('statusFilters', JSON.parse($.cookie('last_status_filters')))

  actions:
    toggleFilter: (wheelchair)->
      statusFilters = @get('statusFilters')

      if !@_extraFilter && statusFilters.length == 4
        # Extra logic if all status filters are set and one is clicked: deactivate the other filters
        statusFilters.clear()
        statusFilters.addObject(wheelchair)
      else
        if statusFilters.contains(wheelchair)
          statusFilters.removeObject(wheelchair)
        else
          statusFilters.addObject(wheelchair)

      @_extraFilter = true

  statusFiltersDidChange: (()->
    $.cookie('last_status_filters', JSON.stringify(@get('statusFilters')))
  ).observes('statusFilters.@each')

  filterNodes: (()->
    self = @

    @get('controllers.map').forEach (node)->
      node.set('isVisible', self.get('statusFilters').contains(node.get('wheelchair')))
  ).observes('controllers.map.@each.wheelchair', 'statusFilters.@each')