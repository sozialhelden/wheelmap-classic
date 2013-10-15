Wheelmap.ToolbarController = Ember.Controller.extend
  statusFilters: ['yes', 'limited', 'no', 'unknown']

  actions:
    toggleFilter: (wheelchair)->
      statusFilters = @get('statusFilters')

      if statusFilters.contains(wheelchair)
        statusFilters.removeObject(wheelchair)
      else
        statusFilters.addObject(wheelchair)