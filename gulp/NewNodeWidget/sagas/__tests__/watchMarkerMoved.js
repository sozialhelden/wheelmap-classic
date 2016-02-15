jest.dontMock('../watchMarkerMoved');

import { MARKER_MOVED, changeNode, markerMoved } from '../../actions';
import selectors from '../../selectors';
import Node from '../../../common/models/Node';

const watchMakerMoved = require('../watchMarkerMoved').default;

describe('watchMakerMoved', () => {
  it('changes node when marker was moved', () => {
    const gen = watchMakerMoved();

    expect(gen.next().value)
      .toTake(MARKER_MOVED);

    const location = { lat: 14.5, lon: 13.5 },
      action = markerMoved(location);

    expect(gen.next(action).value)
      .toSelect(selectors.node);

    let node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.merge], location)

    node = new Node();

    expect(gen.next(node).value)
      .toPut(changeNode(node));

    expect(gen.next().value)
      .toTake(MARKER_MOVED);
  });
});