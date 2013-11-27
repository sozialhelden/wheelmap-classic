Wheelmap.ToolbarController = Ember.ArrayController.extend
  _extraFilter: false # Flag for executing special status filter behavior only once
  needs: 'map'
  statusFilters: null
  searchString: null
  itemController: 'category'

  init: ()->
    @_super()

    statusFilters = ['yes', 'limited', 'no', 'unknown']
    lastStatusFilters = $.cookie('last_status_filters')

    if lastStatusFilters
      try
        statusFilters = JSON.parse(lastStatusFilters)
      catch e
        # Catch JSON syntax errors in invalid cookie value
        unless e instanceof SyntaxError
          throw e

    @set('statusFilters', statusFilters)

  ###
  # Property containing all active categories
  ###
  activeCategories: (()->
    @filterBy('isActive')
  ).property('@each.isActive')

  ###
  # Returns true if all categories are active
  ###
  allCategoriesAreActive: (()->
    @everyBy('isActive')
  ).property('@each.isActive')

  actions:
    toggleAllCategoriesAreActive: ()->
      @setEach('isActive', !@get('allCategoriesAreActive'))
      true

    ###
    # Extra logic if all status filters are set and one is clicked:
    # deactivate the other filters (only on very first toggle)
    ###
    toggleStatusFilter: (wheelchair)->
      statusFilters = @get('statusFilters')

      if !@_extraFilter && statusFilters.length == 4
        statusFilters.replace(0, statusFilters.get('length'), [wheelchair])
      else if statusFilters.contains(wheelchair)
        statusFilters.removeObject(wheelchair)
      else
        statusFilters.addObject(wheelchair)

      @_extraFilter = true

  statusFiltersDidChange: (()->
    $.cookie('last_status_filters', JSON.stringify(@get('statusFilters')))
  ).observes('statusFilters.@each')

  categoryFiltersDidChange: (()->
    categories = @get('activeCategories').mapBy('identifier')
    if I18n.locale == 'de' and categories.length == 1 and categories[0] == 'sport'
      $('#allianz').show()
    else
      $('#allianz').hide()
  ).observes('@each.isActive')