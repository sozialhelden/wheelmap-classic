Wheelmap.WheelchairCheckboxComponent = Ember.Component.extend
  classNameBindings: [':wm-checkbox', 'isChecked:checked', 'wheelchair']
  wheelchair: 'unknown'
  status: 'unknown'

  isChecked: (()->
    @get('wheelchair') == @get('status')
  ).property('wheelchair', 'status')