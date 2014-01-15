Wheelmap.ErrorRoute = Ember.Route.extend
  setupController: (controller, model)->
    try
      response = JSON.parse(model.responseText)
      @controllerFor('flash-messages').pushMessage('error', response.message)
    catch e
      return

  renderTemplate: (controller, model)->
    @transitionTo('index')