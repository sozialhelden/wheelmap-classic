Wheelmap.ControlGroupComponent = Ember.Component.extend
  classNames: ['control-group']
  label: null
  name: null

Wheelmap.ControlErrorComponent = Ember.Component.extend
  classNameBindings: ['errors:error']
  errors: []