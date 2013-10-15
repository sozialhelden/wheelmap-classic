# For more information see: http://emberjs.com/guides/routing/

@Wheelmap.Router.map ()->
  @resource 'index', path: '/', queryParams: ['lat', 'lon', 'zoom', 'node_id', 'status']

# index route showing map (no map route because, we need it more than once)
# route returns models filtered by bounding box of map view ... how to?