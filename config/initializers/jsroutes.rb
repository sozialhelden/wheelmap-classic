JsRoutes.setup do |config|
  config.include = [/^widgets$/, /^embed$/, /^new_node/, /^categories$/]
  config.camel_case = true
end