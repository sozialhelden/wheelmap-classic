Wheelmap.CategoryController = Ember.ObjectController.extend
  isActive: true

  actions:
    toggleIsActive: ->
      @toggleProperty('isActive')
      true