#= require controllers/node.controller

Wheelmap.PopupController = Wheelmap.NodeController.extend
  needs: ['flash-messages']
  isPosting: false
  oldWheelchair: null

  disableWheelchairSubmit: Ember.computed.not('wheelchairSubmit')

  isUnknown: (()->
    @get('oldWheelchair') == 'unknown' or @get('wheelchair') == 'unknown'
  ).property('oldWheelchair', 'wheelchair')

  wheelchairSubmit: (()->
    @get('oldWheelchair')? and @get('wheelchair') != @get('oldWheelchair') and !@get('isPosting')
  ).property('wheelchair', 'oldWheelchair', 'isPosting')

  wheelchairWillChange: (()->
    oldWheelchair = @get('oldWheelchair')

    unless oldWheelchair?
      @set('oldWheelchair', @get('wheelchair'))
  ).observesBefore('wheelchair')

  wheelchairUri: (()->
    '/nodes/' + @get('osm_id') + '/update_wheelchair.js'
  ).property('osm_id')

  resetStatus: ()->
    oldWheelchair = @get('oldWheelchair')

    if oldWheelchair?
      @set('wheelchair', oldWheelchair)
      @get('oldWheelchair', null)

  actions:
    opened: Ember.K

    closed: ()->
      @resetStatus()

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
        self.get('controllers.flash-messages').pushMessage('notice', response.message)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        self.get('controllers.flash-messages').pushMessage('error', response.message)

      promise.always ()->
        self.set('isPosting', false)