jest.dontMock('../changeNodeAddress');

import { CHANGE_NODE_ADDRESS, changeNode, updateMap, changeNodeAddress as changeNodeAddressAction } from '../../actions';
import selectors from '../../selectors';
import Node from '../../../common/models/Node';

const changeNodeAddress = require('../changeNodeAddress').default;

describe('changeNodeAddress', () => {
  const generator = changeNodeAddress();

  it('updates map', () => {
    expect(generator.next().value)
      .toTake(CHANGE_NODE_ADDRESS);

    const node = new Node(),
      action = changeNodeAddressAction(node);

    expect(generator.next(action).value)
      .toPut(changeNode(node));

    expect(generator.next().value)
      .toCall([node, node.address]);

    const address = 'node address';

    expect(generator.next(address).value)
      .toPut(updateMap(address));

    expect(generator.next().done)
      .toBe(false);
  });
});