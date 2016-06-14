jest.dontMock('../navigateToSection');

import { List } from 'immutable';

import { NAVIGATE_TO_SECTION, navigateToSection as navigateToSectionAction } from '../../actions';
import selectors from '../../selectors';
import { NAME_CATEGORY, ADDRESS } from '../../models/sections';
import Node from '../../../common/models/Node';
import { push } from '../../../common/actions/router';

const navigateToSection = require('../navigateToSection').default;

describe('navigateToSection', () => {
  let gen;

  beforeEach(() => {
    gen = navigateToSection();
  });

  it('navigates to section', () => {
    expect(gen.next().value)
      .toTake(NAVIGATE_TO_SECTION);

    const section = NAME_CATEGORY,
      action = navigateToSectionAction(section);

    expect(gen.next(action).value)
      .toSelect(selectors.sections);

    const sections = List([NAME_CATEGORY, ADDRESS]);

    expect(gen.next(sections).value)
      .toSelect(selectors.activeSection);

    const activeSection = ADDRESS;

    expect(gen.next(activeSection).value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toCall([node, node.serialize]);

    const serializedNode = { title: 'Test Node' };

    expect(gen.next(serializedNode).value)
      .toPut(push.newNodeSectionPath(section, serializedNode));

    expect(gen.next(node).value)
      .toTake(NAVIGATE_TO_SECTION);
  });

  it('only navigates backwards in history', () => {
    expect(gen.next().value)
      .toTake(NAVIGATE_TO_SECTION);

    const section = ADDRESS,
      action = navigateToSectionAction(section);

    expect(gen.next(action).value)
      .toSelect(selectors.sections);

    const sections = List([NAME_CATEGORY, ADDRESS]);

    expect(gen.next(sections).value)
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY;

    expect(gen.next(activeSection).value)
      .toTake(NAVIGATE_TO_SECTION);
  });
});