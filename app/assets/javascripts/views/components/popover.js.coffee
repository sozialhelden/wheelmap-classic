Wheelmap.PopoverComponent = Ember.Component.extend
  title: null
  content: null
  options: {}

  didInsertElement: ()->
    self = @
    options = Ember.$.extend {}, self.get('options'),
      title: () ->
        self.get('title')
      content: () ->
        self.get('content')

    self.$().popover(options)

Wheelmap.WheelchairPopoverComponent = Wheelmap.PopoverComponent.extend
  wheelchair: null
  options:
    trigger: 'hover'

  accessibility: (()->
    accessibilities =
      yes: 'fully'
      limited: 'limited'
      no: 'not'
      unknown: 'unknown'

    accessibilities[@get('wheelchair')] + '_accessible'
  ).property('wheelchair')

  title: (()->
    I18n.t("home.index.popup.form." + @get('wheelchair'))
  ).property('wheelchair')

  content: (()->
    I18n.t("wheelmap.what_is." + @get('accessibility'))
  ).property('accessibility')

Ember.Handlebars.helper('wheelchair-popover', Wheelmap.WheelchairPopoverComponent)