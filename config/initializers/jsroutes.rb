JsRoutes.setup do |config|
  config.include = [/^widgets$/, /^embed$/, /^new_node/, /^categories$/, /node$/]
  config.camel_case = true
  config.serializer = 'function(query) { return Wheelmap.stringifyQuery(query); }'
end