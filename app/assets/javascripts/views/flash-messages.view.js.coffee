Wheelmap.FlashMessageView = Ember.View.extend
  template: Ember.Handlebars.compile('{{ message }}')
  classNameBindings: [':flash', 'type', ':fade', 'fadeIn:in']
  typeBinding: 'content.type'
  contextBinding: 'content'
  fadeIn: false

  didInsertElement: ()->
    self = @
    setTimeout (()-> self.toggleProperty('fadeIn')), 0
    setTimeout (()-> self.toggleProperty('fadeIn')), @get('delay')

  transitionEnd: (event)->
    # @TODO Use event informations instead?
    unless @get('fadeIn')
      @get('controller').send('removed', @get('content'))

  delay: (()->
    @get('content.message').split(' ').compact().length / 0.00333333333 # based on 200 WpM
  ).property('content.message')

Wheelmap.FlashMessagesView = Ember.CollectionView.extend
  classNames: ['flash-wrapper']
  contentBinding: 'controller'
  itemViewClass: 'flash-message'