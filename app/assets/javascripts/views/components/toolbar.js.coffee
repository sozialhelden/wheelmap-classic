Wheelmap.StatusFilterButtonComponent = Wheelmap.WheelchairPopoverComponent.extend
  tagName: 'button'
  classNameBindings: [':btn', 'isActive:active', ':btn-info', 'wheelchair']
  wheelchair: null
  activeFilters: null
  template: Ember.Handlebars.compile('<span></span>')

  popoverOptions:
    trigger: 'hover'
    placement: 'bottom'
    delay: { show: 400 }
    container: '#toolbar .status-filter' # Need for not having little spaces between status buttons

  isActive: (()->
    @get('activeFilters').contains(@get('wheelchair'))
  ).property('wheelchair', 'activeFilters.@each')

  click: ()->
    @sendAction('didClick', @get('wheelchair'))

Ember.Handlebars.helper('status-filter-button', Wheelmap.StatusFilterButtonComponent)