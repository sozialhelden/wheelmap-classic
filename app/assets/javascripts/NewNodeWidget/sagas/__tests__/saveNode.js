jest.unmock('../saveNode');

import { SAVE_NODE, load } from '../../actions';
import routes from '../../../common/routes';
import { node as nodeSelector } from '../../selectors';
import * as api from '../../../common/helpers/api';
import Node from '../../../common/models/Node';
import redirect from '../../../common/helpers/redirect';
import saveNode from '../saveNode';

describe('saveNode', () => {
  it('saves node and redirect to map', () => {
    const gen = saveNode();

    expect(gen.next())
      .toTake(SAVE_NODE);

    expect(gen.next())
      .toSelect(nodeSelector);

    const node = new Node();

    expect(gen.next(node))
      .toPut(load(true));

    expect(gen.next())
      .toCall(api.saveNode, node);

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next())
      .toCall(routes.rootPath);

    const root = routes.rootPath();

    expect(gen.next(root))
      .toCall(redirect, root);

    expect(gen.next().done)
      .toBe(true);
  });
});
