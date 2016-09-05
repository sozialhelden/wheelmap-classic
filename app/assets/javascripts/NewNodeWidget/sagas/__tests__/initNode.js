import { NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, changeNode, changeMapCenter, load, setErrors } from '../../actions';
import { replace } from '../../../common/actions/router';
import Node from '../../../common/models/Node';
import { validateNode, HTTPError } from '../../../common/helpers/api';
import initNode from '../initNode';

jest.unmock('../initNode');

describe('initNode', () => {
  it('redirects to name & category section if no node in query', () => {
    const gen = initNode();

    expect(gen.next())
      .toTake(ENTER_CONTENT);

    const nextState = { params: {}, location: { query: {} } };
    const action = {
      type: ENTER_CONTENT,
      payload: nextState
    };

    expect(gen.next(action))
      .toPut(replace.newNodeSectionPath(NAME_CATEGORY));

    expect(gen.next().done)
      .toBe(true);
  });

  it('initializes node', () => {
    const gen = initNode();

    expect(gen.next())
      .toTake(ENTER_CONTENT);

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' };
    const action = {
      type: ENTER_CONTENT,
      payload: { node: queryNode }
    };

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(gen.next(action))
      .toCall(Node.create, { lat: node.lat, lon: node.lon, title: node.title });

    expect(gen.next(node))
      .toPut(changeNode(node));

    expect(gen.next())
      .toCall([ node, node.location ]);

    const location = { lat: node.lat, lon: node.lon };

    expect(gen.next(location))
      .toPut(changeMapCenter(location));

    expect(gen.next())
      .toPut(load(true));

    expect(gen.next())
      .toCall(validateNode, node);

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });

  it('redirects to name & category section if node is invalid', () => {
    const gen = initNode();

    expect(gen.next())
      .toTake(ENTER_CONTENT);

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' };
    const nextState = { params: {}, location: { query: { node: queryNode } } };
    const action = {
      type: ENTER_CONTENT,
      payload: nextState
    };

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(gen.next(action))
      .toCall(Node.create, { lat: node.lat, lon: node.lon, title: node.title });

    expect(gen.next(node))
      .toPut(changeNode(node));

    expect(gen.next())
      .toCall([ node, node.location ]);

    const location = { lat: node.lat, lon: node.lon };

    expect(gen.next(location))
      .toPut(changeMapCenter(location));

    expect(gen.next())
      .toPut(load(true));

    expect(gen.next())
      .toCall(validateNode, node);

    const validationError = new HTTPError();
    validationError.errors = { error: 'error message' };

    expect(gen.throw(validationError))
      .toPut(replace.newNodeSectionPath(NAME_CATEGORY));

    expect(gen.next())
      .toPut(setErrors(validationError.errors));

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(true);
  });
});
