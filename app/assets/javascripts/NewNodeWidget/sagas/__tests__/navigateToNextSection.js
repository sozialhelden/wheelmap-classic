jest.dontMock('../navigateToNextSection');

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

    expect(gen.next().value)
      .toTake(NAVIGATE_TO_NEXT_SECTION);

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    expect(gen.next(activeSection).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall([nodeAttrs, nodeAttrs.toJS]);

    const attrs = ['name', 'node_type'];

    expect(gen.next(attrs).value)
      .toCall(api.validateNode, node, attrs);

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next(node).value)
      .toSelect(selectors.sections);

    const sections = List([NAME_CATEGORY, ADDRESS]);

    expect(gen.next(sections).value)
      .toPut(push.newNodeSectionPath(ADDRESS, node.serialize()));

    expect(gen.next().done)
      .toBe(false);
  });

  it('stops navigation on error', () => {
    const gen = navigateToNextSection();

    expect(gen.next().value)
      .toTake(NAVIGATE_TO_NEXT_SECTION);

    expect(gen.next().value)
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node).value)
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY,
      { nodeAttrs } = activeSection;

    expect(gen.next(activeSection).value)
      .toPut(load(true));

    expect(gen.next().value)
      .toCall([nodeAttrs, nodeAttrs.toJS]);

    const attrs = ['name', 'node_type'];

    expect(gen.next(attrs).value)
      .toCall(api.validateNode, node, attrs);

    const validationError = new api.HTTPError();
    validationError.errors = { error: 'error message' };

    expect(gen.throw(validationError).value)
      .toCall(api.HTTPError.is, validationError, 422);

    expect(gen.next(true).value)
      .toPut(setErrors(validationError.errors));

    expect(gen.next().value)
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(false);
  });
});