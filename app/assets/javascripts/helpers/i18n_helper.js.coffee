Ember.Handlebars.registerHelper 't', (args..., options)->
  keywords = options.data.keywords

  keys = args.map (name)->
    if keywords[name] then keywords[name] else name

  I18n.translate(keys.join('.'), options)