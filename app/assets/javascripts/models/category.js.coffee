attr = DS.attr

Wheelmap.Category = DS.Model.extend
  identifier: attr()

Wheelmap.CategoryAdapter = DS.FixtureAdapter.extend()