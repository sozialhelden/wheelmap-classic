import { List } from 'immutable';

import Section from './Section';

export const NAME_CATEGORY = new Section({
  id: 'name_category',
  nodeAttrs: new List([ 'name', 'nodeType' ])
});

export const ADDRESS = new Section({
  id: 'address',
  nodeAttrs: new List([ 'street', 'housenumber', 'city', 'postcode', 'lat', 'lon' ])
});

export const SIMILAR_NODES = new Section({
  id: 'similar_nodes'
});

export const ACCESSIBILITY = new Section({
  id: 'accessibility',
  nodeAttrs: new List([ 'wheelchair', 'wheelchairToilet', 'wheelchairDescription' ])
});

export const CONTACT = new Section({
  id: 'contact',
  nodeAttrs: new List([ 'phone', 'website' ])
});

export const OVERVIEW = new Section({
  id: 'overview'
});

export default new List([
  NAME_CATEGORY,
  ADDRESS,
  SIMILAR_NODES,
  ACCESSIBILITY,
  CONTACT,
  OVERVIEW
]);
