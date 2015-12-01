Wheelmap.ToolbarView = Ember.View.extend
  classNames: 'toolbar',
  classNameBindings: 'inEmbed',
  templateName: 'toolbar'

  inEmbed: Ember.ENV.WIDGET?

  init: ()->
    @_super()

  searchFormTarget: (()->
    if @inEmbed then '_blank' else null
  ).property()

  showCategories: (()->
    if @inEmbed then Ember.ENV.WIDGET.show_categories else true
  ).property()

  showSearch: (()->
    if @inEmbed then Ember.ENV.WIDGET.show_search else true
  ).property()

  didInsertElement: ()->
    $(window).on 'resize.toolbar', @adjustFilters
    @adjustFilters()

    that = @
    $popovers = @$('[data-popover]')

    adjustPopovers = ->
      $popovers.popover
        placement: if (that.inEmbed || $(window).width() < 767) then 'top' else 'bottom'

    adjustPopovers()

    $(window).on 'resize.toolbar.popover', ->
      $popovers.popover('destroy')
      adjustPopovers()

    return

  didRemoveElement: ()->
    $(window).off 'resize.toolbar'

  adjustFilters: ()->
    # @TODO We need a better place for this!
    @$('.bootstrap-select').toggleClass('dropup', @inEmbed || $(window).width() < 767)

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

  whatIsToiletTitle: (status)->
    I18n.t("toiletstatus.#{status}")

  whatIsToiletYesTitle: (()->
    @whatIsToiletTitle('yes')
  ).property()

  whatIsToiletNoTitle: (()->
    @whatIsToiletTitle('no')
  ).property()

  whatIsToiletUnknownTitle: (()->
    @whatIsToiletTitle('unknown')
  ).property()

  whatIsToiletTitleContent: (status)->
    I18n.t("toiletstatus.what_is.#{status}")

  whatIsToiletYesContent: (()->
    @whatIsToiletTitleContent('yes')
  ).property()

  whatIsToiletNoContent: (()->
    @whatIsToiletTitleContent('no')
  ).property()

  whatIsToiletUnknownContent: (()->
    @whatIsToiletTitleContent('unknown')
  ).property()

  click: (event)->
    # Stop propagation of click on the dropdown menu
    if Ember.$(event.target).closest('.dropdown-menu').length > 0
      event.stopPropagation()