const { createAction } = require('redux-actions');
const debounce = require('mout/function/debounce');

const { push } = require('../../common/actions/router');
const { fetchCategories } = require('../../common/actions/categories');
const { sectionsSelector, fetchedCategoriesSelector } = require('../selectors');
const { searchFirst, reverseGeocode } = require('../../common/helpers/photon');
const { nodeSelector, markerMovedSelector } = require('../selectors');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const CHANGE_NODE = 'CHANGE_NODE';
const MARKER_MOVED = 'MARKER_MOVED';
const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER';
const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM';

const activateSection = createAction(ACTIVATE_SECTION);

const changeNode = createAction(CHANGE_NODE);

const markerMoved = createAction(MARKER_MOVED);

const changeMapCenter = createAction(CHANGE_MAP_CENTER);

const changeMapZoom = createAction(CHANGE_MAP_ZOOM);

const changeNodeAddress = function(props) {
  return (dispatch, getState) => {
    dispatch(changeNode(props));

    const state = getState(),
      node = nodeSelector(state);

    const address = [node.street, node.housenumber, node.postcode, node.city].join(' ');

    dispatch(updateMap(address));
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

const tryFetchSimilar = function(node) {
  return (dispatch) => {

  };
};

const debounceMapUpdate = debounce((address, dispatch) => {
  searchFirst(address)
    .then(feature => {
      const [lon, lat] = feature.geometry.coordinates,
        center = { lat, lon };

      dispatch(changeMapCenter(center))
      dispatch(changeNode(center));
    });
}, 300);

const updateMap = function(address) {
  return (dispatch, getState) => {
    const state = getState(),
      markerMoved = markerMovedSelector(state);

    // Update map only if marker was not moved yet.
    if (markerMoved)
      return;

    debounceMapUpdate(address, dispatch);
  }
};

const updateAddress = function(location) {
  return (dispatch) => {
    dispatch(markerMoved());

    reverseGeocode(location)
      .then(feature => {
        const { properties: { city, street, postcode, housenumber } } = feature;

        dispatch(changeNode({
          city,
          street,
          postcode,
          housenumber,
          lat: location.lat,
          lon: location.lng
        }));
      });
  };
};

module.exports = {
  ACTIVATE_SECTION,
  CHANGE_NODE,
  CHANGE_MAP_CENTER,
  CHANGE_MAP_ZOOM,
  MARKER_MOVED,
  activateSection,
  changeNode,
  markerMoved,
  changeMapCenter,
  changeMapZoom,
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  tryFetchCategories,
  updateMap,
  updateAddress
};