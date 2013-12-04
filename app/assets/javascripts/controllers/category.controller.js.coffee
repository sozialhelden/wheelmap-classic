Wheelmap.CategoryController = Ember.ObjectController.extend
  isActive: true

  actions:
    toggleCategoryIsActive: ->
      @toggleProperty('isActive')
      return