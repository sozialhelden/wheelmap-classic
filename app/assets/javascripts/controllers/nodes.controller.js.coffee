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
      that = @

      unless that.get('wheelchairSubmit')
        return

      data =
        _method: 'PUT'
        wheelchair: that.get('wheelchair')

      that.set('isPosting', true)

      promise = Ember.$.ajax
        type: 'POST'
        url: that.get('wheelchairUri')
        data: data
        dataType: 'json'

      promise.done (response)->
        # Track this event, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", that.get("wheelchair")] if _gaq?
        that.set('oldWheelchair', null)
        that.send('wheelchairSaveDone', response)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        that.send('wheelchairSaveFail', response)

      promise.always ()->
        that.set('isPosting', false)

    wheelchairSaveDone: Ember.K
    wheelchairSaveFail: Ember.K