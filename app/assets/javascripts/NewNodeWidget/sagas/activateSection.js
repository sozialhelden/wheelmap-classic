import { take, put } from 'redux-saga/effects';
import find from 'mout/collection/find';

import { replace } from '../../common/actions/router';
import { ENTER_CONTENT, activateSection } from '../actions';
import * as sections from '../models/sections';

export default function*() {
  while (true) {
    const { payload: { section: sectionId } } = yield take(ENTER_CONTENT);
    const section = find(sections, section => section.id === sectionId);

    // Redirect to name and category (first) section if given section is invalid.
    if (section == null) {
      yield put(replace.newNodeSectionPath(sections.NAME_CATEGORY));

      continue;
    }

    // Activate section.
    yield put(activateSection(section));
  }
}
