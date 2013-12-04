Wheelmap.PopoverComponent = Ember.Component.extend
  popover: null
  popoverTitle: null
  popoverContent: null
  popoverOptions: {}

  didInsertElement: ()->
    self = @
    options = Ember.$.extend {}, self.get('popoverOptions'),
      title: () ->
        self.get('popoverTitle')
      content: () ->
        self.get('popoverContent')

    self.$().popover(options)

Wheelmap.WheelchairPopoverComponent = Wheelmap.PopoverComponent.extend
  wheelchair: null
  popoverOptions:
    trigger: 'hover'

  didInsertElement: ()->
    @_super()
    @toggleWheelchairClass()

  toggleWheelchairClass: (()->
    # Add class yes, no, limited, unknown for styling popover
    wheelchair = @get('wheelchair')
    popover = @$().data('popover')

    if wheelchair? and popover?
      popover.tip().toggleClass(wheelchair)
  ).observesBefore('wheelchair').observes('wheelchair')

  accessibility: (()->
    accessibilities =
      yes: 'fully'
      limited: 'limited'
      no: 'not'
      unknown: 'unknown'

    accessibilities[@get('wheelchair')] + '_accessible'
  ).property('wheelchair')

  popoverTitle: (()->
    I18n.t("home.index.popup.form." + @get('wheelchair'))
  ).property('wheelchair')

  popoverContent: (()->
    I18n.t("wheelmap.what_is." + @get('accessibility'))
  ).property('accessibility')

Ember.Handlebars.helper('wheelchair-popover', Wheelmap.WheelchairPopoverComponent)