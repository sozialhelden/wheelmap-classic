import { take, put } from 'redux-saga/effects';

import { NAVIGATE_TO_NEXT_SECTION, setErrors, load } from '../actions';
import selectors from '../selectors';
import { push } from '../../common/actions/router';
import api from '../../common/helpers/api';

// Navigate to next section based on current section
export default function *navigateToNextSection(getState) {
  while (true) {
    yield take(NAVIGATE_TO_NEXT_SECTION);

    const state = getState(),
      node = selectors.node(state),
      activeSection = selectors.activeSection(state),
      { nodeAttrs } = activeSection;

    yield put(load(true));

    try {
      yield api.validateNode(node, nodeAttrs.toJS());
    } catch(error) {
      if (error instanceof api.HTTPError && error.response.status === 422) {
        const { errors } = error;

        // Abort navigation and show errors.
        yield put(setErrors(errors));
        continue;
      }

      throw error;
    } finally {
      yield put(load(false));
    }

    const sections = selectors.sections(state),
      nextIndex = sections.indexOf(activeSection) + 1,
      nextSection = sections.get(nextIndex);

    yield put(push.newNodeSectionPath(nextSection, node.serialize()));
  }
}