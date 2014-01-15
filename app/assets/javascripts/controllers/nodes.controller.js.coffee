Wheelmap.NodesController = Ember.ObjectController.extend()

Wheelmap.NodesEditController = Wheelmap.NodesController.extend
  actions:
    # Go back to map (use history, when not empty, or index/map route)
    backToMap: ()->
      if window.history.length > 0
        window.history.go(-1)
      else
        @transitionToRoute('index')