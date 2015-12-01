Wheelmap.FlashMessagesController = Ember.ArrayController.extend
  init: (args...)->
    @_super.apply(@, args)

    data = JSON.parse $.cookie("flash")

    types = ['alert', 'notice', 'error', 'success'];

    if data?
      for type in types
        if data[type]?
          @pushMessage(type, data[type]);

    $.cookie('flash', null, path: '/');

  pushMessage: (type, message)->
    @pushObject Wheelmap.FlashMessage.create
      type: type
      message: message

  actions:
    removed: (message)->
      @removeObject(message)

Wheelmap.FlashMessage = Ember.Object.extend
  type: 'notice'
  message: null

