import { take, put, select, call } from 'redux-saga/effects';

import { NAVIGATE_TO_NEXT_SECTION, setErrors, load } from '../actions';
import selectors from '../selectors';
import { push } from '../../common/actions/router';
import api from '../../common/helpers/api';

// Navigate to next section based on current section
export default function *navigateToNextSection() {
  while (true) {
    yield take(NAVIGATE_TO_NEXT_SECTION);

    const node = yield select(selectors.node),
      activeSection = yield select(selectors.activeSection),
      { nodeAttrs } = activeSection;

    yield put(load(true));

    try {
      yield call(api.validateNode, node, nodeAttrs.toJS());
    } catch(error) {
      if (api.HTTPError.is(error, 422)) {
        const { errors } = error;

        // Abort navigation and show errors.
        yield put(setErrors(errors));
        continue;
      }

      throw error;
    } finally {
      yield put(load(false));
    }

    const sections = yield select(selectors.sections),
      nextIndex = sections.indexOf(activeSection) + 1,
      nextSection = sections.get(nextIndex);

    yield put(push.newNodeSectionPath(nextSection, node.serialize()));
  }
}