# For more information see: http://emberjs.com/guides/routing/

@Wheelmap.Router.map ()->
  @resource 'index', path: '/'
  @resource 'popup', path: '/popup/:nodeId'
  @resource 'nodes', path: '/nodes/:nodeId', ()->
    @route('edit')