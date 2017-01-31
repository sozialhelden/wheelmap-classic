Wheelmap.ToolbarController = Ember.ArrayController.extend
  _extraFilter: false # Flag for executing special status filter behavior only once

  needs: ['index', 'map']

  statusFilters: null
  toiletFilters: null
  queryString: null
  itemController: 'category'
  sortProperties: ['name']

  init: ()->
    @_super()

    statusFilters = [
      Ember.Object.create({ key: 'yes', isActive: true })
      Ember.Object.create({ key: 'limited', isActive: true })
      Ember.Object.create({ key: 'no', isActive: true })
      Ember.Object.create({ key: 'unknown', isActive: true })
    ]

    toiletFilters = [
      Ember.Object.create({ key: 'yes', isActive: true })
      Ember.Object.create({ key: 'no', isActive: true })
      Ember.Object.create({ key: 'unknown', isActive: true })
    ]

    @set('statusFilters', statusFilters)
    @set('toiletFilters', toiletFilters)

    return

  ###
  # Property containing all active categories
  ###
  activeCategories: ((key, activeCategories)->
    if activeCategories?
      return @filter (category)->
        isActive = activeCategories.contains(category)
        category.set('isActive', isActive)

        return isActive

    @filterBy('isActive')
  ).property('@each.isActive')

  searchString: Ember.computed('queryString', ->
    queryString = this.get('queryString')
    if queryString?
      return decodeURIComponent(queryString.replace(/\+/g, ' '))
    else
      return queryString
  )

  activeStatusFilters: ((key, activeStatusFilters)->
    statusFilters = @get('statusFilters')

    if activeStatusFilters?
      return statusFilters.filter (statusFilter)->
        isActive = activeStatusFilters.contains(statusFilter)
        statusFilter.set('isActive', isActive)

        return isActive

    statusFilters.filterBy('isActive')
  ).property('statusFilters.@each.isActive')

  activeToiletFilters: ((key, activeToiletFilters)->
    toiletFilters = @get('toiletFilters')

    if activeToiletFilters?
      return toiletFilters.filter (toiletFilter)->
        isActive = activeToiletFilters.contains(toiletFilter)
        toiletFilter.set('isActive', isActive)

        return isActive

    toiletFilters.filterBy('isActive')
  ).property('toiletFilters.@each.isActive')

  isStatusYes: (->
    @get('activeStatusFilters').findBy('key', 'yes')?.get('isActive')
  ).property('activeStatusFilters')

  isStatusLimited: (->
    @get('activeStatusFilters').findBy('key', 'limited')?.get('isActive')
  ).property('activeStatusFilters')

  isStatusNo: (->
    @get('activeStatusFilters').findBy('key', 'no')?.get('isActive')
  ).property('activeStatusFilters')

  isStatusUnknown: (->
    @get('activeStatusFilters').findBy('key', 'unknown')?.get('isActive')
  ).property('activeStatusFilters')

  isToiletYes: (->
    @get('activeToiletFilters').findBy('key', 'yes')?.get('isActive')
  ).property('activeToiletFilters')

  isToiletNo: (->
    @get('activeToiletFilters').findBy('key', 'no')?.get('isActive')
  ).property('activeToiletFilters')

  isToiletUnknown: (->
    @get('activeToiletFilters').findBy('key', 'unknown')?.get('isActive')
  ).property('activeToiletFilters')

  ###
  # Returns true if all categories are active
  ###
  allCategoriesAreActive: (()->
    @everyBy('isActive')
  ).property('activeCategories')

  categoryFiltersDidChange: (()->
    categories = @get('activeCategories').getEach('identifier')

    if I18n.locale == 'de' and categories.length == 1 and categories[0] == 'sport'
      $('#allianz').show()
    else
      $('#allianz').hide()
  ).observes('activeCategories')

  actions:
    toggleCategoryIsActive: ->
      @get('controllers.index').send('transitionToActiveCategories')

    toggleAllCategoriesAreActive: ()->
      @setEach('isActive', !@get('allCategoriesAreActive'))
      @get('controllers.index').send('transitionToActiveCategories')

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
      @get('controllers.index').send('transitionToActiveStatusFilter')

      return

    toggleToiletFilter: (toilet)->
      @get('toiletFilters').findBy('key', toilet).toggleProperty('isActive')
      @get('controllers.index').send('transitionToActiveToiletFilter')

      return