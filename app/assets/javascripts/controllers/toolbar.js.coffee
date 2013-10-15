Wheelmap.ToolbarController = Ember.Controller.extend
  statusFilters: null

  init: ()->
    @_super()

    @set('statusFilters', ['yes', 'limited', 'no', 'unknown'])