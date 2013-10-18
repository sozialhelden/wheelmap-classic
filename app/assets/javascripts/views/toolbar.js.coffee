Wheelmap.ToolbarView = Ember.View.extend
  elementId: 'toolbar'
  templateName: 'toolbar'

  categoryButton: (()->
    activeCategories = @get('controller.activeCategories')
    length = activeCategories.get('length')

    if length == 1
      I18n.t('poi.category.' + activeCategories.get('firstObject.identifier'))
    else
      I18n.t('header.toolbar.categories')
  ).property('controller.activeCategories.length')

  click: (event)->
    # Stop propagation of click on the dropdown menu
    if Ember.$(event.target).closest('.dropdown-menu').length > 0
      event.stopPropagation()