jest.dontMock('../initNode');

import { take, put, call } from 'redux-saga/effects';

import { NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, enterContent, changeNode, changeMapCenter, load, setErrors } from '../../actions';
import { replace } from '../../../common/actions/router';
import Node from '../../../common/models/Node';
import api from '../../../common/helpers/api';

const initNode = require('../initNode').default;

describe('initNode', () => {
  it('redirects to name & category section if no node in query', () => {
    const gen = expectGen(initNode());

    gen.next().value
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: {}, location: { query: {} } },
      action = enterContent(nextState);

    gen.next(action).value
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));

    gen.next().done
      .toBe(true);
  });

  it('initializes node', () => {
    const gen = expectGen(initNode());

    gen.next().value
      .toEqual(take(ENTER_CONTENT));

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node: queryNode } } },
      action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    gen.next(action).value
      .toEqual(call(Node.create, { lat: node.lat, lon: node.lon, title: node.title }));

    gen.next(node).value
      .toEqual(put(changeNode(node)));

    gen.next().value
      .toEqual(call([node, node.location]));

    const location = { lat: node.lat, lon: node.lon };

    gen.next(location).value
      .toEqual(put(changeMapCenter(location)));

    gen.next().value
      .toEqual(put(load(true)));

    gen.next().value
      .toEqual(call(api.validateNode, node));

    gen.next().value
      .toEqual(put(load(false)));

    gen.next().done
      .toBe(true);
  });

  it('redirects to name & category section if node is invalid', () => {
    const gen = expectGen(initNode());

    gen.next().value
      .toEqual(take(ENTER_CONTENT));

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node: queryNode } } },
      action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    gen.next(action).value
      .toEqual(call(Node.create, { lat: node.lat, lon: node.lon, title: node.title }));

    gen.next(node).value
      .toEqual(put(changeNode(node)));

    gen.next().value
      .toEqual(call([node, node.location]));

    const location = { lat: node.lat, lon: node.lon };

    gen.next(location).value
      .toEqual(put(changeMapCenter(location)));

    gen.next().value
      .toEqual(put(load(true)));

    gen.next().value
      .toEqual(call(api.validateNode, node));

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    gen.throw(validationError).value
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));

    gen.next().value
      .toEqual(put(setErrors(validationError.errors)));

    gen.next().value
      .toEqual(put(load(false)));

    gen.next().done
      .toBe(true);
  });
});