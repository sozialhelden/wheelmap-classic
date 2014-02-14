#= require controllers/nodes.controller

Wheelmap.PopupController = Wheelmap.NodesController.extend Wheelmap.WheelchairSubmit,
  needs: ['flash-messages', 'map']

  resetStatus: ()->
    oldWheelchair = @get('oldWheelchair')

    if oldWheelchair?
      @set('wheelchair', oldWheelchair)
      @get('oldWheelchair', null)

  actions:
    close: ()->
      @get('controllers.map').send('closePopup')

    opened: Ember.K

    closed: ()->
      #@resetStatus()
      @set('isPosting', false)

    wheelchairSaveDone: (response)->
      @get('controllers.flash-messages').pushMessage('notice', response.message)

    wheelchairSaveFail: (response)->
      @get('controllers.flash-messages').pushMessage('error', response.message)