Wheelmap.NodePopupView = Ember.View.extend
  templateName: 'node-popup'
  classNames: ['node-popup-view']

  aboutFaqLink: (()->
    if I18n.locale == 'de' then 'http://wheelmap.org/about/faqs/' else 'http://wheelmap.org/en/faqs/'
  ).property()

  linkTarget: (()->
    if Ember.ENV.EMBEDDED then '_blank' else null
  ).property()

Wheelmap.NodePopupStatusDropdownView = Ember.View.extend
  templateName: 'nodes/_status-dropdown'
  tagName: 'section'
  classNames: ['node-status-dropdown']

  $dropdown: (()->
    @$().find('.dropdown-toggle')
  ).property()

  closeDropdown: (()->
    $dropdown = @get('$dropdown')

    # Close dropdown when new wheelchair status is saved
    if !@get('controller.isPosting') and $dropdown.closest('.dropdown').hasClass('open')
      $dropdown.trigger('click.dropdown.data-api')
  ).observes('controller.isPosting')

  click: (event)->
    if Ember.$(event.target).closest('.dropdown-menu').length > 0
      event.stopPropagation()