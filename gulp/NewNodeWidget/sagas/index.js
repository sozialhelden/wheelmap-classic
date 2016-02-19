const { effects: { take, put, fork, cancel }, SagaCancellationException } = require('redux-saga');
const find = require('mout/collection/find');

const actions = require('../actions');
const selectors = require('../selectors');
const sections = require('../models/sections');
const categoriesActions = require('../../common/actions/categories');
const { push, replace } = require('../../common/actions/router');
const api = require('../../common/helpers/api');
const delay = require('../../common/helpers/delayPromise');
const photon = require('../../common/helpers/photon');
const Node = require('../../common/models/Node');
const geolocation = require('../../common/helpers/geolocation');

const { newNodeSectionPath, rootPath } = global.Routes;

function activeSection(section) {
  return ({ type, payload }) => {
    return type === actions.ACTIVATE_SECTION && payload === section;
  };
}

function* activateSection() {
  while (true) {
    const { payload: nextState } = yield take(actions.ENTER_CONTENT),
      { params: { section: sectionId } } = nextState,
      section = find(sections, section => section.id === sectionId);

    // Redirect to name and category (first) section if given section is invalid.
    if (section == null) {
      yield put(replace.newNodeSectionPath(sections.NAME_CATEGORY));

      continue;
    }

    // Activate section.
    yield put(actions.activateSection(section));
  }
}

function* initNode() {
  const { payload: nextState } = yield take(actions.ENTER_CONTENT),
    { location: { query } } = nextState;

  let { node } = query;

  if (node == null)
    return yield put(replace.newNodeSectionPath(sections.NAME_CATEGORY));

  if (node.lat)
    node.lat = parseFloat(node.lat);

  if (node.lon)
    node.lon = parseFloat(node.lon);

  node = new Node(node);

  // Update node from query param if no errors occured.
  yield put(actions.changeNode(node));

  try {
    yield put(actions.load(true));
    yield api.validateNode(node);
  } catch(error) {
    if (error instanceof api.HTTPError) {
      const { errors } = error;

      // ... and redirect to name category section.
      yield put(replace.newNodeSectionPath(sections.NAME_CATEGORY));

      return;
    }

    throw error;
  } finally {
    yield put(actions.load(false));
  }
}

// Pass the change node address to both the CHANGE_NODE and the UPDATE_MAP actions.
function* changeNodeAddress(getState) {
  while (true) {
    const { payload: props } = yield take(actions.CHANGE_NODE_ADDRESS);

    yield put(actions.changeNode(props));

    const state = getState(),
      node = selectors.node(state);

    yield put(actions.updateMap(node.address()));
  }
}

// Navigate to a specific section (e.g. via the breadcrumbs or the overview section)
function* navigateToSection(getState) {
  while (true) {
    const { payload: section } = yield take(actions.NAVIGATE_TO_SECTION);

    const state = getState(),
      sections = selectors.sections(state),
      index = sections.indexOf(section),
      activeSection = selectors.activeSection(state),
      activeIndex = sections.indexOf(activeSection),
      node = selectors.node(state);

    // Move only back in history
    if (activeIndex < index)
      return;

    // Push new node section path
    yield put(push.newNodeSectionPath(section, node.serialize()));
  }
}

// Navigate to next section based on current section
function* navigateToNextSection(getState) {
  while (true) {
    yield take(actions.NAVIGATE_TO_NEXT_SECTION);

    const state = getState(),
      node = selectors.node(state),
      activeSection = selectors.activeSection(state),
      { nodeAttrs } = activeSection;

    yield put(actions.load(true));

    try {
      yield api.validateNode(node, nodeAttrs);
    } catch(error) {
      if (error instanceof api.HTTPError) {
        const { errors } = error;

        // Abort navigation and show errors.
        yield put(actions.setErrors(errors));
        continue;
      }

      throw error;
    } finally {
      yield put(actions.load(false));
    }

    const sections = selectors.sections(state),
      nextIndex = sections.indexOf(activeSection) + 1,
      nextSection = sections.get(nextIndex);

    yield put(push.newNodeSectionPath(nextSection, node.serialize()));
  }
}

// Fetch categories on initialization
function* fetchCategories() {
  yield put(categoriesActions.fetch());
}

// Cancel markerUpdate, when the user moves the marker.
function* cancelUpdateMapTask() {
  // Run updateMap saga until ...
  const updateMapTask = yield fork(debounceUpdateMap);

  // ... marker was moved.
  yield take(actions.MARKER_MOVED);
  yield cancel(updateMapTask);
}

// Cancel updateAddress saga when user inputs own node address parts.
function* cancelUpdateAddressTask(getState) {
  // Run updateAddress saga until ...
  const updateAddressTask = yield fork(updateAddress, getState);

  // ... node address was changed by the user.
  yield take(actions.CHANGE_NODE_ADDRESS);
  yield cancel(updateAddressTask);
}

// Update map
function* updateMap(node) {
  try {
    // Delay photon request (debounce).
    yield delay(300);

    const feature = yield photon.geocode(node.address());

    // Restart daemon if no feature was found.
    if (feature == null)
      return;

    const [lon, lat] = feature.geometry.coordinates,
      center = { lat, lon };

    yield put(actions.changeMapCenter(center));
    yield put(actions.changeNode(node.merge(center)));
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}

// This saga itself is not really debouncing the map update, but in combination with the delay in the updateMap saga,
// we get the desired effect. This two functions need to be devided to don't block the execution between
// CHANGE_NODE_ADDRESS actions via fork.
function* debounceUpdateMap() {
  try {
    let updateMapTask = null;

    while (true) {
      const { payload: node } = yield take(actions.CHANGE_NODE_ADDRESS);

      // Cancel old update map task (debounce).
      if (updateMapTask != null)
        yield cancel(updateMapTask);

      updateMapTask = yield fork(updateMap, node);
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}

// Update the address, when ever the marker was moved.
function* updateAddress(getState) {
  try {
    while (true) {
      const { payload: location } = yield take(actions.MARKER_MOVED);

      const feature = yield photon.reverseGeocode(location),
        { properties: { city, street, postcode, housenumber } } = feature;

      const state = getState(),
        node = selectors.node(state);

      yield put(actions.changeNode(node.merge({
        city, street,
        postcode, housenumber
      })));
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return;

    throw error;
  }
}

// Fetch similar nodes when the user visits the similar node section.
function* fetchSimilar(getState) {
  while(true) {
    yield take(activeSection(sections.SIMILAR_NODES));

    const state = getState(),
      node = selectors.node(state),
      { name, lat, lon } = node;

    yield put(actions.load(true));

    const features = yield photon.search(name, { lat, lon, limit: 5, osm_tag: 'amenity' });

    if (features.length === 0) {
      yield put(actions.navigateToNextSection(sections.SIMILAR_NODES));
      continue;
    }

    yield put(actions.setSimilar(features.map(Node.fromFeature)));
    yield put(actions.load(false));
  }
}

// Reset errors, when section was changed.
function* resetErrors() {
  while(true) {
    yield take(actions.ACTIVATE_SECTION);
    yield put(actions.setErrors({}));
  }
}

// Always update the node position via the map, also when the updateMap saga is canceled.
function* watchMarkerMoved(getState) {
  while (true) {
    const { payload: location } = yield take(actions.MARKER_MOVED);

    const state = getState(),
      node = selectors.node(state);

    yield put(actions.changeNode(node.merge(location)));
  }
}

function* useGeolocation(getState) {
  yield take(activeSection(sections.ADDRESS));

  const state = getState(),
    node = selectors.node(state);

  if (node.hasLocation())
    return;

  yield put(actions.load(true));

  try {
    const position = yield geolocation(),
      { latitude: lat, longitude: lon } = position.coords;

    yield put(actions.changeMapCenter({ lat, lon }));
    yield put(actions.changeMapZoom(16));
  } catch(error) {
    // Position error
    if (error.code) {
      console.error(error.message);
      return;
    }

    throw error;
  } finally {
    yield put(actions.load(false));
  }
}

function* saveNode(getState) {
  while(true) {
    yield take(actions.SAVE_NODE);

    const state = getState(),
      node = selectors.node(state);

    yield put(actions.load(true));

    try {
      yield api.saveNode(node);
      window.location = rootPath();
    } catch(error) {
      if (error instanceof api.HTTPError) {
        continue;
      }

      throw error;
    } finally {
      yield put(actions.load(true));
    }

    break;
  }
}

module.exports = [
  initNode,
  activateSection,
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  fetchCategories,
  fetchSimilar,
  cancelUpdateMapTask,
  cancelUpdateAddressTask,
  resetErrors,
  watchMarkerMoved,
  useGeolocation,
  saveNode
];