jest.unmock('../watchMarkerMoved');

import { MARKER_MOVED, changeNode } from '../../actions';
import { node as nodeSelector } from '../../selectors';
import Node from '../../../common/models/Node';
import watchMakerMoved from '../watchMarkerMoved';

describe('watchMakerMoved', () => {
  it('changes node when marker was moved', () => {
    const gen = watchMakerMoved();

    expect(gen.next())
      .toTake(MARKER_MOVED);

    const location = { lat: 14.5, lon: 13.5 };
    const action = {
      type: MARKER_MOVED,
      payload: location
    };

    expect(gen.next(action))
      .toSelect(nodeSelector);

    let node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.merge ], location);

    node = new Node();

    expect(gen.next(node))
      .toPut(changeNode(node));

    // Endless loop
    expect(gen.next())
      .toTake(MARKER_MOVED);
  });
});
