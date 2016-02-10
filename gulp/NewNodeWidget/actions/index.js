const { createAction } = require('redux-actions');
const debounce = require('mout/function/debounce');
const size = require('mout/collection/size');

const { push } = require('../../common/actions/router');
const { validateNode } = require('../../common/helpers/api');
const { fetchCategories } = require('../../common/actions/categories');
const { sectionsSelector, fetchedCategoriesSelector, activeSectionSelector } = require('../selectors');
const { search, searchFirst, reverseGeocode } = require('../../common/helpers/photon');
const { nodeSelector, markerMovedSelector, addressChangedSelector } = require('../selectors');
const Node = require('../../common/models/Node');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const CHANGE_NODE = 'CHANGE_NODE';
const MARKER_MOVED = 'MARKER_MOVED';
const ADDRESS_CHANGED = 'ADDRESS_CHANGED';
const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER';
const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM';
const FETCH_SIMILAR = 'FETCH_SIMILAR';
const SET_ERRORS = 'SET_ERRORS';

const activateSection = createAction(ACTIVATE_SECTION);

const changeNode = createAction(CHANGE_NODE);

const markerMoved = createAction(MARKER_MOVED);

const addressChanged = createAction(ADDRESS_CHANGED);

const changeMapCenter = createAction(CHANGE_MAP_CENTER);

const changeMapZoom = createAction(CHANGE_MAP_ZOOM);

const setErrors = createAction(SET_ERRORS);

const fetchSimilar = createAction(FETCH_SIMILAR, (node) => {
  const { name, lat, lon } = node;

  return search(name, { lat, lon, limit: 5, osm_tag: 'amenity' })
    .then(features => {
      return features.map(Node.fromFeature);
    });
});

const changeNodeAddress = function(props) {
  return (dispatch, getState) => {
    dispatch(changeNode(props));
    dispatch(addressChanged());

    const state = getState(),
      node = nodeSelector(state);

    const address = [node.street, node.housenumber, node.postcode, node.city].join(' ');

    dispatch(updateMap(address));
  };
};

const navigateToSection = function(section) {
  return (dispatch, getState) => {
    const state = getState(),
      sections = sectionsSelector(state),
      index = sections.indexOf(section),
      activeSection = activeSectionSelector(state),
      activeIndex = sections.indexOf(activeSection);

    // Move only back in history
    if (activeIndex < index)
      return;

    // Reset errors
    dispatch(setErrors({}));

    // Push new node section path
    dispatch(push.newNodeSectionPath(section));
  }
};

const navigateToNextSection = function(currentSection) {
  return (dispatch, getState) => {
    const state = getState(),
      node = nodeSelector(state),
      { nodeAttrs } = currentSection;

    // DRY method for navigating to next section
    const navigate = () => {
      const sections = sectionsSelector(state),
        nextIndex = sections.indexOf(currentSection) + 1;

      // Reset errors
      dispatch(setErrors({}));

      // Push new node section path
      dispatch(push.newNodeSectionPath(sections.get(nextIndex)));
    };

    validateNode(node)
      .then(errors => {
        const sectionErrors = {};

        // No attrs in this section which can have an error or no errors occurred
        if (nodeAttrs.size === 0 || size(errors) === 0)
          return navigate();

        // Copy valid errors into a new section error object
        nodeAttrs.forEach(attr => {
          if (errors[attr])
            sectionErrors[attr] = errors[attr];
        });

        // No errors in this section (maybe an error occurred in a section not filled with input by the user yet)
        if (size(sectionErrors) === 0)
          return navigate();

        dispatch(setErrors(sectionErrors));
      });
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

const debounceMapUpdate = debounce((address, dispatch) => {
  searchFirst(address)
    .then(feature => {
      const [lon, lat] = feature.geometry.coordinates,
        center = { lat, lon };

      dispatch(changeMapCenter(center));
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
  return (dispatch, getState) => {
    dispatch(markerMoved());

    const state = getState(),
      addressChanged = addressChangedSelector(state);

    // Update address only if user has not added own input yet.
    if (addressChanged)
      return;

    reverseGeocode(location)
      .then(feature => {
        const { properties: { city, street, postcode, housenumber } } = feature,
          { lat, lon } = location;

        dispatch(changeNode({
          city, street,
          postcode, housenumber,
          lat, lon
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
  ADDRESS_CHANGED,
  FETCH_SIMILAR,
  SET_ERRORS,
  activateSection,
  changeNode,
  markerMoved,
  addressChanged,
  changeMapCenter,
  changeMapZoom,
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  tryFetchCategories,
  fetchSimilar,
  updateMap,
  updateAddress,
  setErrors
};