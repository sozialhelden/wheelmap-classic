jest.unmock('../activeSection');

import { NAME_CATEGORY } from '../../models/sections';
import { ACTIVATE_SECTION } from '../../actions';
import activeSection from '../activeSection';

describe('activeSection', () => {
  it('returns function for take section', () => {
    const takeActiveSection = activeSection(NAME_CATEGORY);

    expect(takeActiveSection({
      type: ACTIVATE_SECTION,
      payload: NAME_CATEGORY
    })).toBe(true);
  });
});
