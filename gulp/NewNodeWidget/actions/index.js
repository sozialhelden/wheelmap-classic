const { createAction } = require('redux-actions');

const { push } = require('../../common/actions/router');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';

const activateSection = createAction(ACTIVATE_SECTION);

const navigateToSection = function(section) {
  return push.newNodeSectionPath(section);
};

const navigateToNextSection = function(currentSection) {
  return function(dispatch, getState) {
    let sections = getState().widget.get('sections'),
      nextIndex = sections.indexOf(currentSection) + 1;

    dispatch(navigateToSection(sections.get(nextIndex)));
  };
};

module.exports = {
  ACTIVATE_SECTION,
  activateSection,
  navigateToSection,
  navigateToNextSection
};