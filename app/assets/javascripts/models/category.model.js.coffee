attr = DS.attr

Wheelmap.Category = DS.Model.extend
  node_types: DS.hasMany('nodeType')
  identifier: attr()

  name: (->
    I18n.t("poi.category." + @get('identifier'))
  ).property('identifier')

Wheelmap.CategoryAdapter = DS.RESTAdapter.extend()