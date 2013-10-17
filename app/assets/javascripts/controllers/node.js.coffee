Wheelmap.NodeController = Ember.ObjectController.extend
  needs: ['flash-messages']
  isPopping: false
  isVisible: true
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

  popupClosed: (()->
    # Reset if popup was closed and new wheelchair status was not saved
    if @get('isPopping')
      return

    @resetStatus()
  ).observes('isPopping')

  resetStatus: ()->
    if @get('oldWheelchair')?
      @set('wheelchair', @get('oldWheelchair'))
      @get('oldWheelchair', null)

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
        self.set('oldWheelchair', null)
        self.get('controllers.flash-messages').pushMessage('notice', response.message)

      promise.fail (response)->
        @resetStatus()
        self.get('controllers.flash-messages').pushMessage('error', response.message)

      promise.always ()->
        self.set('isPosting', false)

Wheelmap.Node.reopenClass
  WHEELCHAIR_STATUSES: ['yes', 'limited', 'no']