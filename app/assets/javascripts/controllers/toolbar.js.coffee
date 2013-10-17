Wheelmap.ToolbarController = Ember.ArrayController.extend
  needs: 'map'
  statusFilters: ['yes', 'limited', 'no', 'unknown']

  searchString: null,
  _extraFilter: false # Flag for executing special status filter behavior only once

  itemController: 'category'

  init: ()->
    @_super()

    if $.cookie('last_status_filters')
      @set('statusFilters', JSON.parse($.cookie('last_status_filters')))

  actions:

    toggleStatusFilter: (wheelchair)->
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


  categoryFiltersDidChange: (()->

  ).observes('@each.isActive')

  activeCategories: (()->
    @filter (category) ->
      category.get('isActive')
  ).property('@each.isActive')

  filterNodes: (()->
    self = @
    filters = self.get('statusFilters')
    categories = self.get('activeCategories').mapBy('identifier')

    @get('controllers.map').forEach (node)->
      visible = filters.contains(node.get('wheelchair')) and categories.contains(node.get('category'))
      node.set('isVisible', visible)
  ).observes('controllers.map.@each.wheelchair', 'statusFilters.@each', 'activeCategories.@each')