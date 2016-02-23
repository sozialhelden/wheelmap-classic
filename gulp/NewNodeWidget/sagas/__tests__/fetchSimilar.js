jest.dontMock('../fetchSimilar');

import { take, put, select, call } from 'redux-saga/effects';

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

    expect(generator.next().value)
      .toEqual(select(selectors.node));

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lon = 14.5;

    expect(generator.next(node).value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(call(photon.search, node.name, {
        lat: node.lat,
        lon: node.lon,
        limit: 5,
        osm_tag: 'amenity'
      }));

    const features = [
      'feature one',
      'feature two'
    ];

    expect(generator.next(features).value)
      .toEqual(call(Node.fromFeatures, features));

    const nodes = [
      new Node(),
      new Node()
    ];

    expect(generator.next(nodes).value)
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

    expect(generator.next().value)
      .toEqual(select(selectors.node));

    const node = new Node();

    node.name = 'Test node';
    node.lat = 13.5;
    node.lon = 14.5;

    expect(generator.next(node).value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(call(photon.search, node.name, {
        lat: node.lat,
        lon: node.lon,
        limit: 5,
        osm_tag: 'amenity'
      }));

    const features = [];

    expect(generator.next(features).value)
      .toEqual(put(navigateToNextSection()));

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(false);
  });
});