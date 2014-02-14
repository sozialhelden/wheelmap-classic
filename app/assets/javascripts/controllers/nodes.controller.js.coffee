Wheelmap.NodesController = Ember.ObjectController.extend()

Wheelmap.WheelchairSubmit = Ember.Mixin.create
  isPosting: false
  disableWheelchairSubmit: Ember.computed.not('wheelchairSubmit')

  isUnknown: (()->
    @get('oldWheelchair') == 'unknown' or @get('wheelchair') == 'unknown'
  ).property('oldWheelchair', 'wheelchair')

  wheelchairSubmit: (()->
    @get('oldWheelchair')? and @get('wheelchair') != @get('oldWheelchair') and !@get('isPosting')
  ).property('wheelchair', 'oldWheelchair', 'isPosting')

  wheelchairUri: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  actions:
    setWheelchair: (wheelchair)->
      unless @get('isPosting')
        @set('wheelchair', wheelchair)

    saveWheelchair: ()->
      self = @

      unless self.get('wheelchairSubmit')
        return

      data =
        _method: 'PUT'
        wheelchair: self.get('wheelchair')

      self.set('isPosting', true)

      promise = Ember.$.ajax
        type: 'POST'
        url: self.get('wheelchairUri')
        data: data
        dataType: 'json'

      promise.done (response)->
        # Track this event, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", self.get("wheelchair")]  if _gaq?
        self.set('oldWheelchair', null)
        self.send('wheelchairSaveDone', response)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        self.send('wheelchairSaveFail', response)

      promise.always ()->
        self.set('isPosting', false)

    wheelchairSaveDone: Ember.K
    wheelchairSaveFail: Ember.K

Wheelmap.NodesEditController = Wheelmap.NodesController.extend Wheelmap.WheelchairSubmit,
  needs: ['flash-messages']
  categories: []

  actions:
    # Go back to map (use history, when not empty, or index/map route)
    backToMap: ()->
      if window.history.length > 0
        window.history.go(-1)
      else
        @transitionToRoute('index')

    wheelchairSaveDone: (response)->
      @get('controllers.flash-messages').pushMessage('notice', response.message)

    wheelchairSaveFail: (response)->
      @get('controllers.flash-messages').pushMessage('error', response.message)
