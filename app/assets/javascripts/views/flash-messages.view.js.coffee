Wheelmap.FlashMessageView = Ember.View.extend
  template: Ember.Handlebars.compile('{{ view.content.message }}')
  classNameBindings: [':flash', 'content.type', ':fade', 'fadeIn:in']
  fadeIn: false

  didInsertElement: ()->
    Ember.run.next @, 'toggleProperty', 'fadeIn'
    Ember.run.later @, 'toggleProperty', 'fadeIn', @get('delay')

  transitionEnd: (event)->
    # @TODO Use event informations instead?
    unless @get('fadeIn')
      @get('controller').send('removed', @get('content'))

  delay: (()->
    @get('content.message').split(' ').compact().length / 0.001 # based on 200 WpM
  ).property('content.message')

Wheelmap.FlashMessagesView = Ember.CollectionView.extend
  classNames: ['flash-wrapper']
  contentBinding: 'controller'
  itemViewClass: 'flash-message'