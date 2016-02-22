jest.dontMock('../fetchSimilar');

import { take, put } from 'redux-saga/effects';

import { load, navigateToNextSection, setSimilar } from '../../actions';
import selectors from '../../selectors';
import { SIMILAR_NODES } from '../../models/sections';
import photon from '../../../common/helpers/photon';
import activeSection from '../activeSection';
import Node from '../../../common/models/Node';

const fetchSimilar = require('../fetchSimilar').default;

describe('fetchSimilar', () => {
  it('fetches similar nodes', () => {
    const getState = jest.genMockFn(),
      generator = fetchSimilar(getState);

    expect(generator.next().value)
      .toEqual(take(activeSection(SIMILAR_NODES)));

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lng = 14.5;

    selectors.node
      .mockReturnValue(node);

    expect(generator.next().value)
      .toEqual(put(load(true)));

    const features = [
      'feature one',
      'feature two'
    ];

    photon.search
      .mockReturnValue(features);

    expect(generator.next().value)
      .toEqual(features);

    const nodes = [
      new Node(),
      new Node()
    ];

    Node.fromFeature
      .mockReturnValueOnce(nodes[0])
      .mockReturnValueOnce(nodes[1]);

    expect(generator.next(features).value)
      .toEqual(put(setSimilar(nodes)));

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(false);
  });

  it('navigate to next section if no similar nodes were found', () => {
    const getState = jest.genMockFn(),
      generator = fetchSimilar(getState);

    expect(generator.next().value)
      .toEqual(take(activeSection(SIMILAR_NODES)));

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lng = 14.5;

    selectors.node
      .mockReturnValue(node);

    expect(generator.next().value)
      .toEqual(put(load(true)));

    const features = [];

    photon.search
      .mockReturnValue(features);

    expect(generator.next().value)
      .toEqual(features);

    expect(generator.next(features).value)
      .toEqual(put(navigateToNextSection()));

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(false);
  });
});