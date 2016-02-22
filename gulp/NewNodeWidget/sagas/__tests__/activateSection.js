jest.dontMock('../activateSection');

import { take, put } from 'redux-saga/effects';

import { CONTACT, NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, enterContent, activateSection } from '../../actions';
import { replace } from '../../../common/actions/router';

const activateSectionSaga = require('../activateSection').default;

describe('activateSection', () => {
  const generator = activateSectionSaga();

  it('activates section', () => {
    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: { section: CONTACT.id }, location: { query: {} } },
      action = enterContent(nextState);

    expect(generator.next(action).value)
      .toEqual(put(activateSection(CONTACT)));
  });

  it('redirects to name & category section', () => {
    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: { section: 'unknown' }, location: { query: {} } },
      action = enterContent(nextState);

    expect(generator.next(action).value)
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));
  });
});