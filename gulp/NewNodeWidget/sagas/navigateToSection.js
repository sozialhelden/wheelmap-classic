import { take, put, select } from 'redux-saga/effects';

import { NAVIGATE_TO_SECTION } from '../actions';
import selectors from '../selectors';
import { push } from '../../common/actions/router';

// Navigate to a specific section (e.g. via the breadcrumbs or the overview section)
export default function *navigateToSection() {
  while (true) {
    const { payload: section } = yield take(NAVIGATE_TO_SECTION);

    const sections = yield select(selectors.sections),
      index = sections.indexOf(section),
      activeSection = yield select(selectors.activeSection),
      activeIndex = sections.indexOf(activeSection),
      node = yield select(selectors.node);

    // Move only back in history
    if (activeIndex < index)
      continue;

    // Push new node section path
    yield put(push.newNodeSectionPath(section, node.serialize()));
  }
}