jest.dontMock('../activeSection');

import { NAME_CATEGORY } from '../../models/sections';
import { activateSection } from '../../actions';

const activeSection = require('../activeSection').default;

describe('activeSection', () => {
  it('returns function for take section', () => {
    const takeActiveSection = activeSection(NAME_CATEGORY);

    expect(takeActiveSection(activateSection(NAME_CATEGORY)))
      .toBe(true);
  });
});