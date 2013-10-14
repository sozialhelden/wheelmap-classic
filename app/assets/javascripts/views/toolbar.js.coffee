Wheelmap.ToolbarView = Ember.View.extend
  elementId: 'toolbar'
  templateName: 'toolbar'

Wheelmap.ToolbarFilterButtonView = Ember.Component.extend
  tagName: 'button'
  classNameBindings: [':btn', 'isActive:active', ':btn-info', 'wheelchair']
  wheelchair: null
  statusFiltersBinding: 'controller.statusFilter'
  template: Ember.Handlebars.compile('<span></span>')

  isActive: ((key, value)->
    wheelchair = @get('wheelchair')

    if arguments.length > 1
      if value
        @get('statusFilters').addObject(wheelchair)
      else
        @get('statusFilters').removeObject(wheelchair)
      return value

    @get('statusFilters').contains(wheelchair)
  ).property('wheelchair', 'statusFilters')

  click: (event)->
    @toggleProperty('isActive')