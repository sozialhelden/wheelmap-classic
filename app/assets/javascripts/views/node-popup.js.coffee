Wheelmap.NodePopupView = Ember.View.extend
  templateName: 'node-popup'
  classNames: ['node-popup-content-wrapper']

Wheelmap.NodePopupStatusDropdownView = Ember.View.extend
  templateName: 'node-popup/_status'
  tagName: 'section'
  classNames: ['node-popup-status']
  WHEELCHAIR_STATUSES: ['yes', 'limited', 'no']

  wheelchairClass: (()->
    'wheelchair-' + @get('context.wheelchair')
  ).property('wheelchair')