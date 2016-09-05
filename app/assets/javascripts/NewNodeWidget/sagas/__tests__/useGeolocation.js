import { load, changeMapCenter, changeMapZoom } from '../../actions';
import { node as nodeSelector } from '../../selectors';
import activeSection from '../activeSection';
import { ADDRESS } from '../../models/sections';
import geolocation from '../../../common/helpers/geolocation';
import Node from '../../../common/models/Node';
import useGeolocation from '../useGeolocation';

jest.unmock('../useGeolocation');

describe('useGeolocation', () => {
  let gen;

  beforeEach(() => {
    gen = useGeolocation();
  });

  it('geolocates', () => {
    expect(gen.next())
      .toTake(activeSection(ADDRESS));

    expect(gen.next())
      .toSelect(nodeSelector);

    const node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.hasLocation ]);

    expect(gen.next(false))
      .toPut(load(true));

    expect(gen.next())
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

    expect(gen.next(position))
      .toPut(changeMapCenter(center));

    expect(gen.next())
      .toPut(changeMapZoom(16));

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });

  it('aborts if node already has a location', () => {
    expect(gen.next())
      .toTake(activeSection(ADDRESS));

    expect(gen.next())
      .toSelect(nodeSelector);

    const node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.hasLocation ]);

    expect(gen.next(true).done)
      .toBe(true);
  });

  it('catches position errors', () => {
    expect(gen.next())
      .toTake(activeSection(ADDRESS));

    expect(gen.next())
      .toSelect(nodeSelector);

    const node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.hasLocation ]);

    expect(gen.next(false))
      .toPut(load(true));

    expect(gen.next())
      .toCall(geolocation);

    const error = new Error();
    error.code = true;

    expect(gen.throw(error))
      .toPut(load(false));

    expect(gen.next(true).done)
      .toBe(true);
  });
});
