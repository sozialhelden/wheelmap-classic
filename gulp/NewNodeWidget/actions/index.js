const { createAction } = require('redux-actions');
const debounce = require('mout/function/debounce');

const { push } = require('../../common/actions/router');
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

const activateSection = createAction(ACTIVATE_SECTION);

const changeNode = createAction(CHANGE_NODE);

const markerMoved = createAction(MARKER_MOVED);

const addressChanged = createAction(ADDRESS_CHANGED);

const changeMapCenter = createAction(CHANGE_MAP_CENTER);

const changeMapZoom = createAction(CHANGE_MAP_ZOOM);

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

    dispatch(push.newNodeSectionPath(section));
  }
};

const navigateToNextSection = function(currentSection) {
  return (dispatch, getState) => {
    const sections = sectionsSelector(getState()),
      nextIndex = sections.indexOf(currentSection) + 1;

    dispatch(push.newNodeSectionPath(sections.get(nextIndex)));
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
  updateAddress
};