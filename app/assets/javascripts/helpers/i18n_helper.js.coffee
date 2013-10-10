Ember.Handlebars.registerHelper 't', (args..., options)->
  self = @

  keys = args.map (name)->
    Ember.Handlebars.get(self, name, options) ? name

  I18n.translate(keys.join('.'), options.hash)