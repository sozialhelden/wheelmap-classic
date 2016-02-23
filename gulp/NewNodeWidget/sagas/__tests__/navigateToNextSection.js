jest.dontMock('../navigateToNextSection');

import { take, put, select, call } from 'redux-saga/effects';
import { List } from 'immutable';

import { NAVIGATE_TO_NEXT_SECTION, setErrors, load } from '../../actions';
import selectors from '../../selectors';
import { push } from '../../../common/actions/router';
import api from '../../../common/helpers/api';
import Node from '../../../common/models/Node';
import { NAME_CATEGORY, ADDRESS } from '../../models/sections';

const navigateToNextSection = require('../navigateToNextSection').default;

describe('navigateToNextSection', () => {
  it('navigates to next section', () => {
    const gen = expectGen(navigateToNextSection());

    gen.next().value
      .toEqual(take(NAVIGATE_TO_NEXT_SECTION));

    gen.next().value
      .toEqual(select(selectors.node));

    const node = new Node();

    gen.next(node).value
      .toEqual(select(selectors.activeSection));

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    gen.next(activeSection).value
      .toEqual(put(load(true)));

    gen.next().value
      .toEqual(call([nodeAttrs, nodeAttrs.toJS]));

    const attrs = ['name', 'node_type'];

    gen.next(attrs).value
      .toEqual(call(api.validateNode, node, attrs));

    gen.next().value
      .toEqual(put(load(false)));

    gen.next(node).value
      .toEqual(select(selectors.sections));

    const sections = List([NAME_CATEGORY, ADDRESS]);

    gen.next(sections).value
      .toEqual(put(push.newNodeSectionPath(ADDRESS, node.serialize())));

    gen.next().done
      .toBe(false);
  });

  it('stops navigation on error', () => {
    const gen = expectGen(navigateToNextSection());

    gen.next().value
      .toEqual(take(NAVIGATE_TO_NEXT_SECTION));

    gen.next().value
      .toEqual(select(selectors.node));

    const node = new Node();

    gen.next(node).value
      .toEqual(select(selectors.activeSection));

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    gen.next(activeSection).value
      .toEqual(put(load(true)));

    gen.next().value
      .toEqual(call([nodeAttrs, nodeAttrs.toJS]));

    const attrs = ['name', 'node_type'];

    gen.next(attrs).value
      .toEqual(call(api.validateNode, node, attrs));

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    gen.throw(validationError).value
      .toEqual(call(api.HTTPError.is, validationError, 422));

    gen.next(true).value
      .toEqual(put(setErrors(validationError.errors)));

    gen.next().value
      .toEqual(put(load(false)));

    gen.next().done
      .toBe(false);
  });
});