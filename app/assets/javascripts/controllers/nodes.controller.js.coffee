Wheelmap.NodesController = Ember.ObjectController.extend()

Wheelmap.WheelchairSubmit = Ember.Mixin.create
  isPosting: false
  disableWheelchairSubmit: Ember.computed.not('wheelchairSubmit')
  disableToiletSubmit: Ember.computed.not('toiletSubmit')

  isUnknown: (()->
    @get('oldWheelchair') == 'unknown' or @get('wheelchair') == 'unknown'
  ).property('oldWheelchair', 'wheelchair')

  wheelchairSubmit: (()->
    @get('oldWheelchair')? and @get('wheelchair') != @get('oldWheelchair') and !@get('isPosting')
  ).property('wheelchair', 'oldWheelchair', 'isPosting')

  toiletSubmit: (()->
    @get('oldToilet')? and @get('toilet') != @get('oldToilet') and !@get('isPosting')
  ).property('toilet', 'oldToilet', 'isPosting')

  wheelchairUri: (()->
    '/nodes/' + @get('id') + '/update_wheelchair.js'
  ).property('id')

  toiletUri: (()->
    '/nodes/' + @get('id') + '/update_toilet.js'
  ).property('id')

  actions:
    setWheelchair: (wheelchair)->
      unless @get('isPosting')
        @set('wheelchair', wheelchair)

    setToilet: (toilet)->
      unless @get('isPosting')
        @set('toilet', toilet)

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
        that.send('statusSaveDone', response)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        that.send('statusSaveFail', response)

      promise.always ()->
        that.set('isPosting', false)

    saveToilet: ()->
      that = @

      unless that.get('toiletSubmit')
        return

      data =
        _method: 'PUT'
        toilet: that.get('toilet')

      that.set('isPosting', true)

      promise = Ember.$.ajax
        type: 'POST'
        url: that.get('toiletUri')
        data: data
        dataType: 'json'

      promise.done (response)->
        # Track this event, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", that.get("toilet")] if _gaq?
        that.set('oldToilet', null)
        that.send('statusSaveDone', response)

      promise.fail (response)->
        # Track this event as failed, when google analytics is active (Production)
        _gaq.push ["_trackEvent", "Data", "Tag", "failed"]  if _gaq?
        @resetStatus()
        that.send('statusSaveFail', response)

      promise.always ()->
        that.set('isPosting', false)

    wheelchairSaveDone: Ember.K
    wheelchairSaveFail: Ember.K