const { createAction } = require('redux-actions');

const { push } = require('../../common/actions/router');
const { fetchCategories } = require('../../common/actions/categories');
const { sectionsSelector, fetchedCategoriesSelector } = require('../selectors');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';

const activateSection = createAction(ACTIVATE_SECTION);

const navigateToSection = function(section) {
  return push.newNodeSectionPath(section);
};

const navigateToNextSection = function(currentSection) {
  return (dispatch, getState) => {
    const sections = sectionsSelector(getState()),
      nextIndex = sections.indexOf(currentSection) + 1;

    dispatch(navigateToSection(sections.get(nextIndex)));
  };
};

const tryFetchCategories = function() {
  return (dispatch, getState) => {
    const fetchedCategories = fetchedCategoriesSelector(getState());

    // Did already fetch categories.
    if (fetchedCategories)
      return;

    dispatch(fetchCategories());
  }
};

module.exports = {
  ACTIVATE_SECTION,
  activateSection,
  navigateToSection,
  navigateToNextSection,
  tryFetchCategories
};