jest.dontMock('../updateMap');

import { SagaCancellationException } from 'redux-saga';
import { createMockTask } from 'redux-saga/utils';

import { MARKER_MOVED, changeMapCenter, changeNode, CHANGE_NODE_ADDRESS, changeNodeAddress } from '../../actions';
import photon from '../../../common/helpers/photon';
import delay from '../../../common/helpers/delayPromise';
import Node from '../../../common/models/Node';

const { default: cancelUpdateMap, updateMap, debounceUpdateMap } = require('../updateMap');

describe('cancelUpdateMap', () => {
  it('fork debounceUpdateMap and cancel it when the marker was moved', () => {
    const gen = cancelUpdateMap();

    expect(gen.next().value)
      .toFork(debounceUpdateMap);

    const debounceUpdateMapTask = createMockTask();

    expect(gen.next(debounceUpdateMapTask).value)
      .toTake(MARKER_MOVED);

    expect(gen.next().value)
      .toCancel(debounceUpdateMapTask);

    expect(gen.next().done)
      .toBe(true);
  });
});

describe('updateMap', () => {
  let gen, node;

  beforeEach(() => {
    node = new Node();
    gen = updateMap(node);
  });

  it('delays execution, geocodes address and changes node position', () => {
    expect(gen.next().value)
      .toCall(delay, 300);

    expect(gen.next().value)
      .toCall([node, node.address]);

    const address = 'Node address';

    expect(gen.next(address).value)
      .toCall(photon.geocode, address);

    const center = {
      lat: 14.5,
      lon: 13.5
    };

    const feature = {
      geometry: {
        coordinates: [center.lon, center.lat]
      }
    };

    expect(gen.next(feature).value)
      .toPut(changeMapCenter(center));

    expect(gen.next().value)
      .toCall([node, node.merge], center);

    node = new Node();

    expect(gen.next(node).value)
      .toPut(changeNode(node));

    expect(gen.next().done)
      .toBe(true);
  });

  it('delays execution, geocodes address and stops if no feature was found', () => {
    expect(gen.next().value)
      .toCall(delay, 300);

    expect(gen.next().value)
      .toCall([node, node.address]);

    const address = 'Node address';

    expect(gen.next(address).value)
      .toCall(photon.geocode, address);

    const feature = null;

    expect(gen.next(feature).done)
      .toBe(true);
  });

  it('can be canceled', () => {
    expect(gen.next().value)
      .toCall(delay, 300);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  });
});

describe('debounceUpdateMap', () => {
  let gen;

  beforeEach(() => {
    gen = debounceUpdateMap();
  });

  it('forks the updateMap saga and cancels it on second iteration', () => {
    expect(gen.next().value)
      .toTake(CHANGE_NODE_ADDRESS);

    let node = new Node(),
      action = changeNodeAddress(node);

    expect(gen.next(action).value)
      .toFork(updateMap, node);

    let updateMapTask = createMockTask();

    expect(gen.next(updateMapTask).value)
      .toTake(CHANGE_NODE_ADDRESS);

    node = new Node();
    action = changeNodeAddress(node);

    expect(gen.next(action).value)
      .toCancel(updateMapTask);

    updateMapTask = createMockTask();

    expect(gen.next(updateMapTask).value)
      .toFork(updateMap, node);

    expect(gen.next().value)
      .toTake(CHANGE_NODE_ADDRESS);
  });

  it('can be canceled', () => {
    expect(gen.next().value)
      .toTake(CHANGE_NODE_ADDRESS);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  });
});