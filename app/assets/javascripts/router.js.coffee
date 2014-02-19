# For more information see: http://emberjs.com/guides/routing/

@Wheelmap.Router.map ()->
  @resource 'index', path: '/'
  @resource 'popup', path: '/popup/:node_id'
  @resource 'nodes', path: '/nodes/:node_id', ()->
    @route('edit')