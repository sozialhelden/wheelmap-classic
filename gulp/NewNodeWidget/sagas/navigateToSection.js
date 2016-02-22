import { take, put } from 'redux-saga/effects';

import { NAVIGATE_TO_SECTION } from '../actions';
import selectors from '../selectors';
import { push } from '../../common/actions/router';

// Navigate to a specific section (e.g. via the breadcrumbs or the overview section)
export default function *navigateToSection(getState) {
  while (true) {
    const { payload: section } = yield take(NAVIGATE_TO_SECTION);

    const state = getState(),
      sections = selectors.sections(state),
      index = sections.indexOf(section),
      activeSection = selectors.activeSection(state),
      activeIndex = sections.indexOf(activeSection),
      node = selectors.node(state);

    // Move only back in history
    if (activeIndex < index)
      continue;

    // Push new node section path
    yield put(push.newNodeSectionPath(section, node.serialize()));
  }
}