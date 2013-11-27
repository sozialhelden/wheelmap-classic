Wheelmap.NodePopupView = Ember.View.extend
  templateName: 'node-popup'
  classNames: ['node-popup-content-wrapper']

  aboutFaqLink: (()->
    if I18n.locale == 'de' then 'http://wheelmap.org/about/faqs/' else 'http://wheelmap.org/en/faqs/'
  ).property()

Wheelmap.NodePopupStatusDropdownView = Ember.View.extend
  templateName: 'node-popup-status'
  tagName: 'section'
  classNames: ['node-popup-status']

  $dropdown: (()->
    Ember.$(@get('element')).find('.dropdown-toggle')
  ).property()

  closeDropdown: (()->
    $dropdown = @get('$dropdown')

    # Close dropdown when new wheelchair status is saved (old wheelchair status is set to null)
    unless @get('controller.oldWheelchair')? or $dropdown.hasClass('open')
      $dropdown.dropdown('toggle')
  ).observes('controller.oldWheelchair')

  click: (event)->
    if Ember.$(event.target).closest('.dropdown-menu').length > 0
      event.stopPropagation()