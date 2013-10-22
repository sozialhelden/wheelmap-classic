Wheelmap.ToolbarController = Ember.ArrayController.extend
  _extraFilter: false # Flag for executing special status filter behavior only once
  needs: 'map'
  statusFilters: null
  searchString: null
  itemController: 'category'

  activeCategories: ((key, categories)->
    @filterBy('isActive')
  ).property('@each.isActive')

  init: ()->
    @_super()

    properties =
      statusFilters: ['yes', 'limited', 'no', 'unknown']

    if $.cookie('last_status_filters')
      try
        properties.statusFilters = Ember.A(JSON.parse($.cookie('last_status_filters')))
      catch e
        # Catch JSON syntax errors in invalid cookie value
        unless e instanceof SyntaxError
          throw e

    @setProperties(properties)

  allActive: (()->
    @everyBy('isActive')
  ).property('@each.isActive')

  actions:
    toggleAllIsActive: ()->
      @setEach('isActive', !@get('allActive'))
      true

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

  filterNodes: (()->
    self = @
    filters = self.get('statusFilters')
    categories = self.get('activeCategories').mapBy('identifier')

    @get('controllers.map').forEach (node)->
      visible = filters.contains(node.get('wheelchair')) and categories.contains(node.get('category'))
      node.set('isVisible', visible)
  ).observes('controllers.map.@each', 'statusFilters.@each', 'activeCategories')