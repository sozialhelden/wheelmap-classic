import {
  CHANGE_NODE_ADDRESS,
  changeNode,
  updateMap
} from '../../actions';
import Node from '../../../common/models/Node';
import changeNodeAddress from '../changeNodeAddress';

jest.unmock('../changeNodeAddress');

describe('changeNodeAddress', () => {
  const generator = changeNodeAddress();

  it('updates map', () => {
    expect(generator.next())
      .toTake(CHANGE_NODE_ADDRESS);

    const node = new Node();
    const action = {
      type: CHANGE_NODE_ADDRESS,
      payload: node
    };

    expect(generator.next(action))
      .toPut(changeNode(node));

    expect(generator.next())
      .toCall([ node, node.address ]);

    const address = 'node address';

    expect(generator.next(address))
      .toPut(updateMap(address));

    expect(generator.next().done)
      .toBe(false);
  });
});
