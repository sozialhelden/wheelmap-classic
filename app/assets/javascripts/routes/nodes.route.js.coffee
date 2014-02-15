Wheelmap.NodesEditRoute = Wheelmap.FakeMapRoute.extend
  model: (params)->
    @modelFor('nodes')

  setupController: (controller, model, queryParams)->
    @_super(controller, model, queryParams)

    @store.findAll('category').then (categories)->
      controller.set('categories', categories)

  actions:
    save: ->
      promise = @currentModel.save()

      promise.then ->
        console.log('Saved')

      promise.fail ->
        console.log('Failed')