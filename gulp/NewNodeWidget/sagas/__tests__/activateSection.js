jest.dontMock('../activateSection');

import { take, put } from 'redux-saga/effects';

import { CONTACT, NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, enterContent, activateSection as activateSectionAction } from '../../actions';
import { replace } from '../../../common/actions/router';

const activateSection = require('../activateSection').default;

describe('activateSection', () => {
  it('activates section', () => {
    const generator = activateSection();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: { section: CONTACT.id }, location: { query: {} } },
      action = enterContent(nextState);

    expect(generator.next(action).value)
      .toEqual(put(activateSectionAction(CONTACT)));

    expect(generator.next().done)
      .toBe(false);
  });

  it('redirects to name & category section', () => {
    const generator = activateSection();

    expect(generator.next().value)
      .toEqual(take(ENTER_CONTENT));

    const nextState = { params: { section: 'unknown' }, location: { query: {} } },
      action = enterContent(nextState);

    expect(generator.next(action).value)
      .toEqual(put(replace.newNodeSectionPath(NAME_CATEGORY)));

    expect(generator.next().done)
      .toBe(false);
  });
});