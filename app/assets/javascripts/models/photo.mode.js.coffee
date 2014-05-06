attr = DS.attr

Wheelmap.Photo = DS.Model.extend
  image: attr()
  preview: attr()

Wheelmap.PhotoAdapter = DS.ActiveModelAdapter.extend()