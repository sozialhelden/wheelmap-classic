# http://emberjs.com/guides/models/defining-a-store/

Wheelmap.Store = DS.Store.extend
  revision: 11
  adapter: DS.RESTAdapter.create()

