jest.dontMock('../fetchSimilar');

import { load, navigateToNextSection, setSimilar } from '../../actions';
import selectors from '../../selectors';
import { SIMILAR_NODES } from '../../models/sections';
import photon from '../../../common/helpers/photon';
import activeSection from '../activeSection';
import Node from '../../../common/models/Node';

const fetchSimilar = require('../fetchSimilar').default;

describe('fetchSimilar', () => {
  it('fetches similar nodes', () => {
    const gen = fetchSimilar();

    expect(gen.next().value)
      .toTake(activeSection(SIMILAR_NODES));

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lon = 14.5;

    expect(gen.next(node).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(photon.search, node.name, {
        lat: node.lat,
        lon: node.lon,
        limit: 5,
        osm_tag: 'amenity'
      });

    const features = [
      'feature one',
      'feature two'
    ];

    expect(gen.next(features).value)
      .toCall(Node.fromFeatures, features);

    const nodes = [
      new Node(),
      new Node()
    ];

    expect(gen.next(nodes).value)
      .toPut(setSimilar(nodes));

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(false);
  });

  it('navigate to next section if no similar nodes were found', () => {
    const gen = fetchSimilar();

    expect(gen.next().value)
      .toTake(activeSection(SIMILAR_NODES));

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lon = 14.5;

    expect(gen.next(node).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(photon.search, node.name, {
        lat: node.lat,
        lon: node.lon,
        limit: 5,
        osm_tag: 'amenity'
      });

    const features = [];

    expect(gen.next(features).value)
      .toPut(navigateToNextSection());

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(false);
  });
});