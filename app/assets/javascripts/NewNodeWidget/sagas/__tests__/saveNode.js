jest.dontMock('../saveNode');

import { SAVE_NODE, load } from '../../actions';
import { rootPath } from '../../../common/routes';
import selectors from '../../selectors';
import api from '../../../common/helpers/api';
import Node from '../../../common/models/Node';
import redirect from '../../../common/helpers/redirect';

const saveNode = require('../saveNode').default;

describe('saveNode', () => {
  it('saves node and redirect to map', () => {
    const gen = saveNode();

    expect(gen.next().value)
      .toTake(SAVE_NODE);

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall(api.saveNode, node);

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().value)
      .toCall(rootPath);

    const root = rootPath();

    expect(gen.next(root).value)
      .toCall(redirect, root);

    expect(gen.next().done)
      .toBe(true);
  });
});