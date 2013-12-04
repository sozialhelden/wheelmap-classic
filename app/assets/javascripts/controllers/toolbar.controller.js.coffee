Wheelmap.ToolbarController = Ember.ArrayController.extend
  _extraFilter: false # Flag for executing special status filter behavior only once
  needs: 'map'
  statusFilters: null
  searchString: null
  itemController: 'category'

  init: ()->
    @_super()

    @set 'statusFilters', [
      Ember.Object.create({ key: 'yes', isActive: true })
      Ember.Object.create({ key: 'limited', isActive: true })
      Ember.Object.create({ key: 'no', isActive: true })
      Ember.Object.create({ key: 'unknown', isActive: true })
    ]

    lastStatusFilters = $.cookie('last_status_filters')

    if lastStatusFilters
      try
        @set('activeStatusFilters', JSON.parse(lastStatusFilters))
      catch e
        # Catch JSON syntax errors in invalid cookie value
        unless e instanceof SyntaxError
          throw e

  ###
  # Property containing all active categories
  ###
  activeCategories: (()->
    @filterBy('isActive')
  ).property('@each.isActive')

  activeStatusFilters: ((key, newStatusFilters)->
    statusFilters = @get('statusFilters')

    if arguments.length > 1
      return statusFilters.filter (statusFilter)->
        isActive = newStatusFilters.contains(statusFilter.get('key'))

        if isActive isnt statusFilter.get('isActive')
          statusFilter.set('isActive', isActive)

        return isActive

    statusFilters.filterBy('isActive')
  ).property('statusFilters.@each.isActive')

  ###
  # Returns true if all categories are active
  ###
  allCategoriesAreActive: (()->
    @everyBy('isActive')
  ).property('activeCategories')

  activeStatusFiltersDidChange: (()->
    $.cookie('last_status_filters', JSON.stringify(@get('activeStatusFilters').getEach('key')))

    @get('controllers.map').send('permalink')
  ).observes('activeStatusFilters')

  categoryFiltersDidChange: (()->
    categories = @get('activeCategories').mapBy('identifier')

    if I18n.locale == 'de' and categories.length == 1 and categories[0] == 'sport'
      $('#allianz').show()
    else
      $('#allianz').hide()

    @get('controllers.map').send('permalink')
  ).observes('activeCategories')

  actions:
    toggleAllCategoriesAreActive: ()->
      @setEach('isActive', !@get('allCategoriesAreActive'))

    ###
    # Extra logic if all status filters are set and one is clicked:
    # deactivate the other filters (only on very first toggle)
    ###
    toggleStatusFilter: (wheelchair)->
      statusFilters = @get('statusFilters')
      statusFilter = statusFilters.findBy('key', wheelchair)

      unless statusFilter?
        return

      if !@_extraFilter && @get('activeStatusFilters').length == 4
        statusFilters.setEach('isActive', false)
        statusFilter.set('isActive', true)
      else
        statusFilter.toggleProperty('isActive')

      @_extraFilter = true

      return