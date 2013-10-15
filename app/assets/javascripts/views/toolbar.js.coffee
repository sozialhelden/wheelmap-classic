Wheelmap.ToolbarView = Ember.View.extend
  elementId: 'toolbar'
  templateName: 'toolbar'

Wheelmap.ToolbarFilterButtonView = Ember.View.extend
  tagName: 'button'
  classNameBindings: [':btn', 'isActive:active', ':btn-info', 'wheelchair']
  wheelchair: null
  template: Ember.Handlebars.compile('<span></span>')

  isActive: (()->
    @get('controller.statusFilters').contains(@get('wheelchair'))
  ).property('wheelchair', 'controller.statusFilters.@each')

  click: (event)->
    @get('controller').send('toggleFilter', @get('wheelchair'))