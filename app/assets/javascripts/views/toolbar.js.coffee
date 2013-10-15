Wheelmap.ToolbarView = Ember.View.extend
  elementId: 'toolbar'
  templateName: 'toolbar'

Wheelmap.ToolbarFilterButtonView = Ember.View.extend
  tagName: 'button'
  classNameBindings: [':btn', 'isActive:active', ':btn-info', 'wheelchair']
  wheelchair: null
  statusFiltersBinding: 'controller.statusFilters'
  template: Ember.Handlebars.compile('<span></span>')

  isActive: ((key, value)->
    wheelchair = @get('wheelchair')

    if arguments.length > 1
      if value
        @get('statusFilters').addObject(wheelchair)
      else
        @get('statusFilters').removeObject(wheelchair)

      console.log(@get('statusFilters'))

      return value

    @get('statusFilters').contains(wheelchair)
  ).property('wheelchair', 'statusFilters.@each')

  click: (event)->
    @toggleProperty('isActive')