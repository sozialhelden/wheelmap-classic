Wheelmap.ToolbarView = Ember.View.extend
  classNames: 'toolbar'
  templateName: 'toolbar'

  init: ()->
    @_super()

  didInsertElement: ()->
    $(window).on 'resize.toolbar', @adjustFilters
    @adjustFilters()

  didRemoveElement: ()->
    $(window).off 'resize.toolbar'

  adjustFilters: ()->
    # @TODO We need a better place for this!
    @$('.bootstrap-select').toggleClass('dropup', $(window).width() < 767)

  addToggleSearchbar: (()->
    toolbarView = @

    toolbarView.$('[data-toggle="searchbar"]').click ->
      toolbarView.$($(@).data('target')).toggleClass('active');
  ).on('didInsertElement')

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