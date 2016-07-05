jest.unmock('../activateSection');

import { CONTACT, NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, activateSection as activateSectionAction } from '../../actions';
import { replace } from '../../../common/actions/router';
import activateSection from '../activateSection';

describe('activateSection', () => {
  it('activates section', () => {
    const generator = activateSection();

    expect(generator.next())
      .toTake(ENTER_CONTENT);

    const action = {
      type: ENTER_CONTENT,
      payload: {
        section: CONTACT.id
      }
    };

    expect(generator.next(action))
      .toPut(activateSectionAction(CONTACT));

    expect(generator.next().done)
      .toBe(false);
  });

  it('redirects to name & category section', () => {
    const generator = activateSection();

    expect(generator.next())
      .toTake(ENTER_CONTENT);

    const action = {
      type: ENTER_CONTENT,
      payload: {
        section: 'unknown'
      }
    };

    expect(generator.next(action))
      .toPut(replace.newNodeSectionPath(NAME_CATEGORY));

    expect(generator.next().done)
      .toBe(false);
  });
});
