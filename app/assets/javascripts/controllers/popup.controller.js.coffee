#= require controllers/nodes.controller
#= require controllers/map.controller

Wheelmap.PopupController = Wheelmap.NodesController.extend Wheelmap.WheelchairSubmit, Wheelmap.MapSessionControllerMixin,
  needs: ['flash-messages']

  resetStatus: ()->
    oldWheelchair = @get('oldWheelchair')

    if oldWheelchair?
      @set('wheelchair', oldWheelchair)
      @get('oldWheelchair', null)

    oldToilet = @get('oldToilet')

    if (oldToilet?)
      @set('toilet', oldToilet)
      @get('oldToilet', null)

    return

  actions:
    close: ()->
      @get('controllers.map').send('closePopup')

    opened: Ember.K

    closed: ()->
      #@resetStatus()
      @set('isPosting', false)

    statusSaveDone: (response)->
      @get('controllers.flash-messages').pushMessage('notice', response.message)

    statusSaveFail: (response)->
      @get('controllers.flash-messages').pushMessage('error', response.message)