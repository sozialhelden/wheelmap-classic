jest.dontMock('../useGeolocation');

import { load, changeMapCenter, changeMapZoom } from '../../actions';
import selectors from '../../selectors';
import activeSection from '../activeSection';
import sections from '../../models/sections';
import geolocation from '../../../common/helpers/geolocation';
import Node from '../../../common/models/Node';

const useGeolocation = require('../useGeolocation').default;

describe('useGeolocation', () => {
  let gen;

  beforeEach(() => {
    gen = useGeolocation();
  });

  it('geolocates', () => {
    expect(gen.next().value)
      .toTake(activeSection(sections.ADDRESS));

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.hasLocation]);

    expect(gen.next(false).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(geolocation);

    const center = {
      lat: 13.5,
      lon: 14.5
    };

    const position = {
      coords: {
        latitude: center.lat,
        longitude: center.lon
      }
    };

    expect(gen.next(position).value)
      .toPut(changeMapCenter(center));

    expect(gen.next().value)
      .toPut(changeMapZoom(16));

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });

  it('aborts if node already has a location', () => {
    expect(gen.next().value)
      .toTake(activeSection(sections.ADDRESS));

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.hasLocation]);

    expect(gen.next(true).done)
      .toBe(true);
  });

  it('catches position errors', () => {
    expect(gen.next().value)
      .toTake(activeSection(sections.ADDRESS));

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.hasLocation]);

    expect(gen.next(false).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(geolocation);

    const error = new Error();
    error.code = true;

    expect(gen.throw(error).value)
      .toPut(load(false));

    expect(gen.next(true).done)
      .toBe(true);
  });
});