Wheelmap.ErrorRoute = Ember.Route.extend
  setupController: (controller, model)->
    try
      @controllerFor('flash-messages').pushMessage('error', model.responseJSON.message)
    catch e
      return

  renderTemplate: (controller, model)->
    @transitionTo('index')