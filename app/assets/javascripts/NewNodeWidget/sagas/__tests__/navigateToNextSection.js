import { List } from 'immutable';

import { NAVIGATE_TO_NEXT_SECTION, setErrors, load } from '../../actions';
import * as selectors from '../../selectors';
import { push } from '../../../common/actions/router';
import { validateNode, HTTPError } from '../../../common/helpers/api';
import Node from '../../../common/models/Node';
import { NAME_CATEGORY, ADDRESS } from '../../models/sections';
import navigateToNextSection from '../navigateToNextSection';

jest.unmock('../navigateToNextSection');

describe('navigateToNextSection', () => {
  it('navigates to next section', () => {
    const gen = navigateToNextSection();

    expect(gen.next())
      .toTake(NAVIGATE_TO_NEXT_SECTION);

    expect(gen.next())
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node))
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY;
    const { nodeAttrs } = activeSection;

    expect(gen.next(activeSection))
      .toPut(load(true));

    expect(gen.next())
      .toCall([ nodeAttrs, nodeAttrs.toJS ]);

    const attrs = [ 'name', 'node_type' ];

    expect(gen.next(attrs))
      .toCall(validateNode, node, attrs);

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next(node))
      .toSelect(selectors.sections);

    const sections = new List([ NAME_CATEGORY, ADDRESS ]);

    expect(gen.next(sections))
      .toPut(push.newNodeSectionPath(ADDRESS, node.serialize()));

    expect(gen.next().done)
      .toBe(false);
  });

  it('stops navigation on error', () => {
    const gen = navigateToNextSection();

    expect(gen.next())
      .toTake(NAVIGATE_TO_NEXT_SECTION);

    expect(gen.next())
      .toSelect(selectors.node);

    const node = new Node();

    expect(gen.next(node))
      .toSelect(selectors.activeSection);

    const activeSection = NAME_CATEGORY;
    const { nodeAttrs } = activeSection;

    expect(gen.next(activeSection))
      .toPut(load(true));

    expect(gen.next())
      .toCall([ nodeAttrs, nodeAttrs.toJS ]);

    const attrs = [ 'name', 'node_type' ];

    expect(gen.next(attrs))
      .toCall(validateNode, node, attrs);

    const validationError = new HTTPError();
    validationError.errors = { error: 'error message' };

    expect(gen.throw(validationError))
      .toCall(HTTPError.is, validationError, 422);

    expect(gen.next(true))
      .toPut(setErrors(validationError.errors));

    expect(gen.next())
      .toPut(load(false));

    expect(gen.next().done)
      .toBe(false);
  });
});
