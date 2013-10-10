Wheelmap.WheelchairCheckboxComponent = Ember.Component.extend
  templateName: 'wheelchair-checkbox'
  classNameBindings: [':wm-checkbox', 'wheelchairClass', 'isChecked:checked']
  wheelchair: 'unknown'
  status: 'unknown'

  wheelchairClass: (()->
    'wheelchair-' + @get('wheelchair')
  ).property('wheelchair')

  isChecked: (()->
    @get('wheelchair') == @get('status')
  ).property('wheelchair', 'status')