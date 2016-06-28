import { take, put, call } from 'redux-saga/effects';
import find from 'lodash.find';

import routes from '../../common/routes';
import { ENTER_CONTENT, activateSection } from '../actions';
import * as sections from '../models/sections';

export default function*() {
  while (true) {
    const { payload: { section: sectionId, replace } } = yield take(ENTER_CONTENT);
    const section = find(sections, [ 'id', sectionId ]);

    // Redirect to name and category (first) section if given section is invalid.
    if (section == null) {
      yield call(replace, routes.newNodeSectionPath({ section: sections.NAME_CATEGORY }));

      continue;
    }

    // Activate section.
    yield put(activateSection(section));
  }
}
