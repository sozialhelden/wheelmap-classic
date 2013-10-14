Wheelmap.FlashMessageView = Ember.View.extend
  template: Ember.Handlebars.compile('{{ message }}')
  classNameBindings: [':flash', 'type', ':fade', 'fadeIn:in']
  typeBinding: 'content.type'
  contextBinding: 'content'
  fadeIn: false

  didInsertElement: ()->
    self = @
    delay = @get('content.message').split(' ').compact().length / 0.00333333333
    setTimeout (()-> self.set('fadeIn', true)), 0
    setTimeout (()-> self.remove()), delay

  destroyElement: ()->
    unless @get('fadeIn')
      @_super()
    else
      @set('fadeIn', false)

  transitionEnd: (event)->
    unless @get('fadeIn')
      @destroyElement()

Wheelmap.FlashMessagesView = Ember.CollectionView.extend
  classNames: ['flash-wrapper']
  contentBinding: 'controller'
  itemViewClass: 'flash-message'