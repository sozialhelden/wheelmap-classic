import { take, put } from 'redux-saga/effects';
import find from 'mout/collection/find';

import { replace } from '../../common/actions/router';
import { ENTER_CONTENT, activateSection } from '../actions';
import sections, { NAME_CATEGORY } from '../models/sections';

export default function*() {
  while (true) {
    const { payload: { section: sectionId } } = yield take(ENTER_CONTENT),
      section = find(sections, section => section.id === sectionId);

    // Redirect to name and category (first) section if given section is invalid.
    if (section == null) {
      yield put(replace.newNodeSectionPath(NAME_CATEGORY));

      continue;
    }

    // Activate section.
    yield put(activateSection(section));
  }
}