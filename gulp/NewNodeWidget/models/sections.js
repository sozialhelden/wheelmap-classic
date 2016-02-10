const { List } = require('immutable');

const Section = require('./Section');

const NAME_CATEGORY = new Section({
  id: 'name_category',
  nodeAttrs: List(['name', 'nodeType'])
});

const ADDRESS = new Section({
  id: 'address',
  nodeAttrs: List(['street', 'housenumber', 'city', 'postcode', 'lat', 'lon'])
});

const SIMILAR_NODES = new Section({
  id: 'similar_nodes'
});

const ACCESSIBILITY = new Section({
  id: 'accessibility',
  nodeAttrs: List(['wheelchair', 'wheelchairToilet', 'wheelchairDescription'])
});

const CONTACT = new Section({
  id: 'contact',
  nodeAttrs: List(['phone', 'website'])
});

const OVERVIEW = new Section({
  id: 'overview'
});

module.exports = {
  NAME_CATEGORY,
  ADDRESS,
  SIMILAR_NODES,
  ACCESSIBILITY,
  CONTACT,
  OVERVIEW
};