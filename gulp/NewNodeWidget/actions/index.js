const { createAction } = require('redux-actions');
const debounce = require('mout/function/debounce');

const { push } = require('../../common/actions/router');
const { fetchCategories } = require('../../common/actions/categories');
const { sectionsSelector, fetchedCategoriesSelector } = require('../selectors');
const { searchFirst } = require('../../common/helpers/photon');
const { nodeSelector } = require('../selectors');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const CHANGE_NODE = 'CHANGE_NODE';

const activateSection = createAction(ACTIVATE_SECTION);

const changeNode = createAction(CHANGE_NODE, (field, value) => {
  return { field, value };
});

const changeNodeAddress = function(field, value) {
  return (dispatch) => {
    dispatch(changeNode(field, value));
    dispatch(updateMap());
  };
};

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

const debounceMapUpdate = debounce((dispatch, getState) => {
  const state = getState(),
    node = nodeSelector(state);

  const address = [node.street, node.housenumber, node.postcode, node.city].join(' ');

  searchFirst(address)
    .then(feature => {
      const [lon, lat] = feature.geometry.coordinates;

      dispatch(changeNode('lat', lat));
      dispatch(changeNode('lon', lon));
    });
}, 300);

const updateMap = function() {
  return debounceMapUpdate;
};

module.exports = {
  ACTIVATE_SECTION,
  CHANGE_NODE,
  activateSection,
  changeNode,
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  tryFetchCategories,
  updateMap
};