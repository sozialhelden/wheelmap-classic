jest.dontMock('../initNode');

import { take, put } from 'redux-saga/effects';

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

    const node = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node } } },
      action = enterContent(nextState);

    const { value } = generator.next(action),
      location = { lat: 15.5, lon: 13.3 };

    expect(Node)
      .lastCalledWith({ ...location, title: 'Test Node' });

    expect(changeNode)
      .toBeCalledWith(jasmine.any(Node));

    const nodeInstance = changeNode.mock.calls[0][0];

    nodeInstance.location.mockReturnValue(location);

    expect(value)
      .toEqual(put(changeNode(nodeInstance)));

    expect(generator.next().value)
      .toEqual(put(changeMapCenter(location)));

    expect(generator.next().value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(api.validateNode());

    expect(generator.next().value)
      .toEqual(put(load(false)));

    expect(generator.next().done)
      .toBe(true);
  });

  it('redirects to name & category section if node is invalid', () => {
    const generator = initNode();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const node = { lat: '15.5', lon: '13.3', title: 'Test Node' },
      nextState = { params: {}, location: { query: { node } } },
      action = enterContent(nextState);

    const { value } = generator.next(action),
      location = { lat: 15.5, lon: 13.3 };

    expect(Node)
      .lastCalledWith({ ...location, title: 'Test Node' });

    expect(changeNode)
      .toBeCalledWith(jasmine.any(Node));

    const nodeInstance = changeNode.mock.calls[0][0];

    expect(value)
      .toEqual(put(changeNode(nodeInstance)));

    expect(generator.next().value)
      .toEqual(put(load(true)));

    expect(generator.next().value)
      .toEqual(api.validateNode());

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