JsRoutes.setup do |config|
  config.include = [/^widgets$/, /^embed$/, /^new_node$/, /^new_node_section$/]
  config.camel_case = true
end