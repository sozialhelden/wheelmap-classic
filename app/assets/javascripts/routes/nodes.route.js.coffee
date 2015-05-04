Wheelmap.NodesEditRoute = Wheelmap.FakeMapRoute.extend
  signedIn: false

  beforeModel: (transition)->
    transition.send('authenticate', transition)

  model: (params)->
    @modelFor('nodes')

  setupController: (controller, model, queryParams)->
    @_super(controller, model, queryParams)

    @store.findAll('category').then (categories)->
      controller.set('categories', categories)

  actions:
    authenticate: (transition)->
      self = @

      if self.signedIn
        return

      transition.abort()

      $.ajax('/profile/signed_in').done (signedIn)->
        if signedIn
          self.signedIn = true;
          transition.retry()
        else
          window.location = '/nodes/' + transition.params.nodes.node_id + '/edit'