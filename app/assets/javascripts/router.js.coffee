# For more information see: http://emberjs.com/guides/routing/

@Wheelmap.Router.map ()->
  @resource 'index', path: '/', queryParams: Wheelmap.MapRoute.DEFAULT_QUERY_PARAMS
  @resource 'popup', path: '/popup/:node_id', queryParams: Wheelmap.MapRoute.DEFAULT_QUERY_PARAMS