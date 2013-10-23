Wheelmap.FlashMessagesController = Ember.ArrayController.extend
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

