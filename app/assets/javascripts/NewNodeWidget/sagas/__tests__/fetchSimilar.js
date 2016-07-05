jest.unmock('../fetchSimilar');

import { load, setSimilar } from '../../actions';
import { node as nodeSelector } from '../../selectors';
import { SIMILAR_NODES } from '../../models/sections';
import { findSimilar } from '../../../common/helpers/nodes';
import activeSection from '../activeSection';
import Node from '../../../common/models/Node';
import fetchSimilar from '../fetchSimilar';

describe('fetchSimilar', () => {
  it('fetches similar nodes', () => {
    const gen = fetchSimilar();

    expect(gen.next())
      .toTake(activeSection(SIMILAR_NODES));

    expect(gen.next())
      .toSelect(nodeSelector);

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lon = 14.5;

    expect(gen.next(node))
      .toPut(load(true));

    expect(gen.next())
      .toCall(findSimilar, node.name, {
        lat: node.lat,
        lon: node.lon,
        limit: 5
      });

    const features = [
      'feature one',
      'feature two'
    ];

    expect(gen.next(features))
      .toCall(Node.fromFeatures, features);

    const nodes = [
      new Node(),
      new Node()
    ];

    expect(gen.next(nodes))
      .toPut(setSimilar(nodes));

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(false);
  });
});
