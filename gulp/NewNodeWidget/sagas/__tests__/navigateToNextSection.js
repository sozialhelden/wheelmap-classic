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
    const gen = navigateToNextSection();

    expectNext(gen).value
      .toEqual(take(NAVIGATE_TO_NEXT_SECTION));

    expectNext(gen).value
      .toEqual(select(selectors.node));

    const node = new Node();

    expectNext(gen, node).value
      .toEqual(select(selectors.activeSection));

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    expectNext(gen, activeSection).value
      .toEqual(put(load(true)));

    expectNext(gen).value
      .toEqual(call([nodeAttrs, nodeAttrs.toJS]));

    const attrs = ['name', 'node_type'];

    expectNext(gen, attrs).value
      .toEqual(call(api.validateNode, node, attrs));

    expectNext(gen).value
      .toEqual(put(load(false)));

    expectNext(gen, node).value
      .toEqual(select(selectors.sections));

    const sections = List([NAME_CATEGORY, ADDRESS]);

    expectNext(gen, sections).value
      .toEqual(put(push.newNodeSectionPath(ADDRESS, node.serialize())));

    expectNext(gen).done
      .toBe(false);
  });

  it('stops navigation on error', () => {
    const gen = navigateToNextSection();

    expectNext(gen).value
      .toEqual(take(NAVIGATE_TO_NEXT_SECTION));

    expectNext(gen).value
      .toEqual(select(selectors.node));

    const node = new Node();

    expectNext(gen, node).value
      .toEqual(select(selectors.activeSection));

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    expectNext(gen, activeSection).value
      .toEqual(put(load(true)));

    expectNext(gen).value
      .toEqual(call([nodeAttrs, nodeAttrs.toJS]));

    const attrs = ['name', 'node_type'];

    expectNext(gen, attrs).value
      .toEqual(call(api.validateNode, node, attrs));

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    expectThrow(gen, validationError).value
      .toEqual(call(api.HTTPError.is, validationError, 422));

    expectNext(gen, true).value
      .toEqual(put(setErrors(validationError.errors)));

    expectNext(gen).value
      .toEqual(put(load(false)));

    expectNext(gen).done
      .toBe(false);
  });
});