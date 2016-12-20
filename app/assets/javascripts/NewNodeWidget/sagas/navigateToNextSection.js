import { take, put, select, call } from 'redux-saga/effects';

import { NAVIGATE_TO_NEXT_SECTION, setErrors, load } from '../actions';
import * as selectors from '../selectors';
import { push } from '../../common/actions/router';
import { validateNode, HTTPError } from '../../common/helpers/api';

// Navigate to next section based on current section
export default function* navigateToNextSection() {
  while (true) {
    yield take(NAVIGATE_TO_NEXT_SECTION);

    const node = yield select(selectors.node);
    const activeSection = yield select(selectors.activeSection);
    const { nodeAttrs } = activeSection;

    yield put(load(true));

    const attrs = yield call([ nodeAttrs, nodeAttrs.toJS ]);

    try {
      yield call(validateNode, node, attrs);

      const sections = yield select(selectors.sections);
      const nextIndex = sections.indexOf(activeSection) + 1;
      const nextSection = sections.get(nextIndex);

      yield put(push.newNodeSectionPath(nextSection, node.serialize()));
    } catch (error) {
      if (yield call(HTTPError.is, error, 422)) {
        const { errors } = error;

        // Abort navigation and show errors.
        yield put(setErrors(errors));
      } else {
        throw error;
      }
    } finally {
      yield put(load(false));
    }
  }
}
