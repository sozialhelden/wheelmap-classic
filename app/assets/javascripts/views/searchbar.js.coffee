Wheelmap.SearchbarView = Ember.TextField.extend
  autocomplete: "off"
  name: "q"
  classNames: ['search-input']
  elementId: "search"
  valueBinding: 'controller.searchString'
  attributeBindings: ['autocomplete', 'name', 'placeholder']

  placeholder: (()->
    I18n.t('header.searchbar.placeholder')
  ).property()


Wheelmap.SearchbarButtonView = Ember.View.extend
  tagName: 'button'
  type: "submit"
  classNames: ['btn', 'btn-info']
  attributeBindings: ['value', 'type']
  template: Ember.Handlebars.compile('<i class="icon-search icon-light"></i>')

  value: (()->
    I18n.t('header.searchbar.find')
  ).property()
