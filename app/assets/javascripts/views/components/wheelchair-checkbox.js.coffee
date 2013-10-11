Wheelmap.WheelchairCheckboxComponent = Ember.Component.extend
  templateName: 'wheelchair-checkbox'
  classNameBindings: [':wm-checkbox', 'isChecked:checked', 'wheelchair']
  wheelchair: 'unknown'
  status: 'unknown'

  isChecked: (()->
    @get('wheelchair') == @get('status')
  ).property('wheelchair', 'status')