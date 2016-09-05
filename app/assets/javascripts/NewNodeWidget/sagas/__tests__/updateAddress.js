import { SagaCancellationException } from 'redux-saga';
import { createMockTask } from 'redux-saga/utils';

import * as actions from '../../actions';
import { node as nodeSelector } from '../../selectors';
import { reverseGeocode } from '../../../common/helpers/photon';
import Node from '../../../common/models/Node';
import cancelUpdateAddressTask, { updateAddress } from '../updateAddress';

jest.unmock('../updateAddress');

describe('cancelUpdateAddressTask', () => {
  it('fork updateAddress and cancel it when the node address was changed', () => {
    const gen = cancelUpdateAddressTask();

    expect(gen.next())
      .toFork(updateAddress);

    const updateAddressTask = createMockTask();

    expect(gen.next(updateAddressTask))
      .toTake(actions.CHANGE_NODE_ADDRESS);

    expect(gen.next())
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
    expect(gen.next())
      .toTake(actions.MARKER_MOVED);

    const location = { lat: 14.5, lon: 13.5 };

    expect(gen.next(actions.markerMoved(location)))
      .toPut(actions.loadNodeAddress(true));

    expect(gen.next())
      .toCall(reverseGeocode, location);

    const feature = {
      properties: {
        city: 'Berlin',
        street: 'Andreasstraße',
        postcode: '10243',
        housenumber: '10'
      }
    };

    expect(gen.next(feature))
      .toSelect(nodeSelector);

    let node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.merge ], feature.properties);

    node = new Node();

    expect(gen.next(node))
      .toPut(actions.changeNode(node));

    expect(gen.next(node))
      .toPut(actions.loadNodeAddress(false));

    expect(gen.next())
      .toTake(actions.MARKER_MOVED);
  });

  it('can be canceled', () => {
    expect(gen.next())
      .toTake(actions.MARKER_MOVED);

    const error = new SagaCancellationException();

    expect(gen.throw(error).done)
      .toBe(true);
  });
});
