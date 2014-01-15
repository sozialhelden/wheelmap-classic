Wheelmap.NodesEditRoute = Wheelmap.FakeMapRoute.extend
  model: (params)->
    @store.find('node', params.post_id)