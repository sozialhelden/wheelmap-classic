Wheelmap.CustomSelectComponent = Ember.Component.extend
  templateName: 'components/custom-select'
  classNames: 'custom-select'
  name: ''
  options: []

Ember.Handlebars.helper('custom-select', Wheelmap.CustomSelectComponent)