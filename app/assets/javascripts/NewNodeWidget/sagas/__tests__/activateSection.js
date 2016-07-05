jest.unmock('../activateSection');

import routes from '../../../common/routes';
import { CONTACT, NAME_CATEGORY } from '../../models/sections';
import { ENTER_CONTENT, activateSection as activateSectionAction } from '../../actions';
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

    const replace = jest.fn();

    const action = {
      type: ENTER_CONTENT,
      payload: {
        section: 'unknown',
        replace
      }
    };

    expect(generator.next(action))
      .toCall(replace, routes.newNodeSectionPath({ section: NAME_CATEGORY }));

    expect(generator.next().done)
      .toBe(false);
  });
});
