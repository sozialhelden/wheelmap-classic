jest.dontMock('../initNode');

import { take, put, call } from 'redux-saga/effects';

import { NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, enterContent, changeNode, changeMapCenter, load, setErrors } from '../../actions';
import { replace } from '../../../common/actions/router';
import Node from '../../../common/models/Node';
import api from '../../../common/helpers/api';

const initNode = require('../initNode').default;

describe('initNode', () => {
  beforeEach(() => {
    changeNode.mockClear();
    api.validateNode.mockClear();
  });

  it('redirects to name & category section if no node in query', () => {
    const generator = initNode();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: {}, location: { query: {} } },
      action = enterContent(nextState);

    expect(generator.next(action).value)
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));

    expect(generator.next().done)
      .toBe(true);
  });

  it('initializes node', () => {
    const generator = initNode();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node: queryNode } } },
      action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(generator.next(action).value)
      .toEqual(call(Node.create, { lat: node.lat, lon: node.lon, title: node.title }));

    expect(generator.next(node).value)
      .toEqual(put(changeNode(node)));

    expect(generator.next().value)
      .toEqual(call([node, node.location]));

    const location = { lat: node.lat, lon: node.lon };

    expect(generator.next(location).value)
      .toEqual(put(changeMapCenter(location)));

    expect(generator.next().value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(call(api.validateNode, node));

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(true);
  });

  it('redirects to name & category section if node is invalid', () => {
    const generator = initNode();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const queryNode = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node: queryNode } } },
      action = enterContent(nextState);

    const node = new Node();

    node.lat = 15.5;
    node.lon = 13.3;
    node.title = 'Test Node';

    expect(generator.next(action).value)
      .toEqual(call(Node.create, { lat: node.lat, lon: node.lon, title: node.title }));

    expect(generator.next(node).value)
      .toEqual(put(changeNode(node)));

    expect(generator.next().value)
      .toEqual(call([node, node.location]));

    const location = { lat: node.lat, lon: node.lon };

    expect(generator.next(location).value)
      .toEqual(put(changeMapCenter(location)));

    expect(generator.next().value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(call(api.validateNode, node));

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    expect(generator.throw(validationError).value)
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));

    expect(generator.next().value)
      .toEqual(put(setErrors(validationError.errors)));

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(true);
  });
});