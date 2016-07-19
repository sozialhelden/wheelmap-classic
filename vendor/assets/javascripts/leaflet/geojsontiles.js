var GeoJSONTileLayer = L.TileLayer.extend({
  initialize: function(tileUrl, options) {
    L.TileLayer.prototype.initialize.call(this, tileUrl, options);

    this._layerGroup = L.layerGroup();

    if (this.options.debug)
      this.addInspector();
  },

  _reset: function () {
    for (var key in this._tiles) {
      this._tiles[key].request.abort();
    }

    L.TileLayer.prototype._reset.apply(this, arguments);

    this._layerGroup.clearLayers();
  },

  onAdd: function (map) {
    L.TileLayer.prototype.onAdd.call(this, map);
    map.addLayer(this._layerGroup);
  },

  onRemove: function (map) {
    L.TileLayer.prototype.onRemove.call(this, map);
    map.removeLayer(this._layerGroup);
  },

  _addTile: function(tilePoint) {
    var tile = {};

    this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
    this._loadTile(tile, tilePoint);
  },

  _removeTile: function(key) {
    var tile = this._tiles[key];

    tile.request.abort();
    this.fire('tileunload', { tile: tile });

    if (tile.layer != null)
      this._layerGroup.removeLayer(tile.layer);

    delete this._tiles[key];
  },

  getLayers: function() {
    var layers = [];

    this._layerGroup.eachLayer(function(layer) {
      layers.push.apply(layers, layer.getLayers());
    });

    return layers;
  },

  _loadTile: function(tile, tilePoint) {
    this._adjustTilePoint(tilePoint);

    var url = this.getTileUrl(tilePoint),
      layer = this;

    tile.point = tilePoint;

    this.fire('tileloadstart', {
      tile: tile,
      url: url
    });

    tile.request = $.ajax(url)
      .success(function(data) {
        tile.layer = new L.GeoJSON(data, layer.options);

        layer._tileOnLoad(tile, url);
      })
      .fail(function() {
        layer._tileOnError(tile, url);
      });
  },

  _tileOnLoad: function (tile, url) {
    this._tilesToLoad--;

    this._layerGroup.addLayer(tile.layer);

    this.fire('tileload', {
      tile: tile,
      url: url
    });
  },

  _tileOnError: function (tile, url) {
    this.fire('tileerror', {
      tile: tile,
      url: url
    });
  },

  addInspector: function() {
    var rects = {};

    this.on('tileload', function(event) {
      if (rects[event.url])
        return;

      var point = this._getTilePos(event.tile.point),
        size = this._getTileSize();

      var northWest = this._map.containerPointToLatLng(point),
        southEast = this._map.containerPointToLatLng(L.point(point.x + size, point.y + size));

      var bounds = L.latLngBounds([ northWest, southEast ]);

      var rect = rects[event.url] = L.rectangle(bounds, { color: '#ff7800', weight: 1 });

      this._layerGroup.addLayer(rect);
    });

    this.on('tileunload', function(event) {
      if (!rects[event.url])
        return;

      this._layerGroup.removeLayer(rects[event.url]);
    });
  }
});