jest.unmock('../navigateToSection');

import { List } from 'immutable';

import { NAVIGATE_TO_SECTION } from '../../actions';
import * as selectors from '../../selectors';
import { NAME_CATEGORY, ADDRESS } from '../../models/sections';
import Node from '../../../common/models/Node';
import { push } from '../../../common/actions/router';
import navigateToSection from '../navigateToSection';

describe('navigateToSection', () => {
  let gen;

  beforeEach(() => {
    gen = navigateToSection();
  });

  it('navigates to section', () => {
    expect(gen.next())
      .toTake(NAVIGATE_TO_SECTION);

    const section = NAME_CATEGORY;
    const action = {
      type: NAVIGATE_TO_SECTION,
      payload: section
    };

    expect(gen.next(action))
      .toSelect(selectors.sections);

    const sections = new List([ NAME_CATEGORY, ADDRESS ]);

    expect(gen.next(sections))
      .toSelect(selectors.activeSection);

    const activeSection = ADDRESS;

    expect(gen.next(activeSection))
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node))
      .toCall([ node, node.serialize ]);

    const serializedNode = { title: 'Test Node' };

    expect(gen.next(serializedNode))
      .toPut(push.newNodeSectionPath(section, serializedNode));

    expect(gen.next(node))
      .toTake(NAVIGATE_TO_SECTION);
  });

  it('only navigates backwards in history', () => {
    expect(gen.next())
      .toTake(NAVIGATE_TO_SECTION);

    const section = ADDRESS;
    const action = {
      type: NAVIGATE_TO_SECTION,
      payload: section
    };

    expect(gen.next(action))
      .toSelect(selectors.sections);

    const sections = new List([ NAME_CATEGORY, ADDRESS ]);

    expect(gen.next(sections))
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY;

    expect(gen.next(activeSection))
      .toTake(NAVIGATE_TO_SECTION);
  });
});
