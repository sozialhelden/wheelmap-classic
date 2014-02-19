eachTranslatedAttribute = (object, fn)->
  isTranslatedAttribute = /(.+)I18n$/

  for key of object
    isTranslatedAttributeMatch = key.match(isTranslatedAttribute)

    if isTranslatedAttributeMatch
      fn.call(object, isTranslatedAttributeMatch[1], I18n.t(object[key]))

Wheelmap.TranslateableProperties = Ember.Mixin.create
  applyTranslations: (->
    eachTranslatedAttribute @, (attribute, translation)->
      @addObserver attribute + 'I18n', @, ->
        Ember.set(@, attribute, I18n.t(@.get(attribute + 'I18n')))

      Ember.set(@, attribute, translation)
  ).on('init')

Wheelmap.TranslateableAttributes = Ember.Mixin.create
  applyTranslations: (->
    eachTranslatedAttribute @, (attribute, translation)->
      @$().attr(attribute, translation)
  ).on('didInsertElement')

Ember.Handlebars.registerHelper 't', (args..., options)->
  self = @

  keys = args.map (name)->
    Ember.Handlebars.get(self, name, options) ? name

  I18n.translate(keys.join('.'), options.hash)
