jest.dontMock('../updateAddress');

import { SagaCancellationException } from 'redux-saga';
import { createMockTask } from 'redux-saga/utils';

import { CHANGE_NODE_ADDRESS, MARKER_MOVED, changeNode, markerMoved } from '../../actions';
import selectors from '../../selectors';
import photon from '../../../common/helpers/photon';
import Node from '../../../common/models/Node';

const { default: cancelUpdateAddressTask, updateAddress } = require('../updateAddress');

describe('cancelUpdateAddressTask', () => {
  it('fork updateAddress and cancel it when the node address was changed', () => {
    const gen = cancelUpdateAddressTask();

    expect(gen.next().value)
      .toFork(updateAddress);

    const updateAddressTask = createMockTask();

    expect(gen.next(updateAddressTask).value)
      .toTake(CHANGE_NODE_ADDRESS);

    expect(gen.next().value)
      .toCancel(updateAddressTask);

    expect(gen.next().done)
      .toBe(true);
  });
});

describe('updateAddress', () => {
  let gen;

  beforeEach(() => {
    gen = updateAddress();
  });

  it('updates node address when marker was moved', () => {
    expect(gen.next().value)
      .toTake(MARKER_MOVED);

    const location = { lat: 14.5, lon: 13.5 },
      action = markerMoved(location);

    expect(gen.next(action).value)
      .toCall(photon.reverseGeocode, location);

    const feature = {
      properties: {
        city: 'Berlin',
        street: 'Andreasstraße',
        postcode: '10243',
        housenumber: '10'
      }
    };

    expect(gen.next(feature).value)
      .toSelect(selectors.node);

    let node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.merge], feature.properties);

    node = new Node();

    expect(gen.next(node).value)
      .toPut(changeNode(node));

    expect(gen.next().value)
      .toTake(MARKER_MOVED);
  });

  it('can be canceled', () => {
    expect(gen.next().value)
      .toTake(MARKER_MOVED);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  })
});