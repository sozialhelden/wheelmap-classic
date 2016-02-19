JsRoutes.setup do |config|
  config.include = [/^root$/, /^widgets$/, /^embed$/, /^new_node/, /^categories$/, /node$/, /^nodes$/]
  config.camel_case = true
  config.serializer = 'function(query) { return Wheelmap.stringifyQuery(query); }'
end