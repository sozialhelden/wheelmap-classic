const { take, put, fork, cancel, SagaCancellationException, getState } = require('redux-saga');

const actions = require('../actions');
const selectors = require('../selectors');
const sections = require('../models/sections');
const categoriesActions = require('../../common/actions/categories');
const { push } = require('../../common/actions/router');
const api = require('../../common/helpers/api');
const photon = require('../../common/helpers/photon');
const Node = require('../../common/models/Node');

function* changeNodeAddress(getState) {
  while (true) {
    const { payload: props } = yield take(actions.CHANGE_NODE_ADDRESS);

    yield put(actions.changeNode(props));

    const state = getState(),
      node = selectors.node(state);

    const address = [node.street, node.housenumber, node.postcode, node.city].join(' ');

    yield put(actions.updateMap(address));
  }
}

function* navigateToSection(getState) {
  while (true) {
    const { payload: section } = yield take(actions.NAVIGATE_TO_SECTION);

    const state = getState(),
      sections = selectors.sections(state),
      index = sections.indexOf(section),
      activeSection = selectors.activeSection(state),
      activeIndex = sections.indexOf(activeSection);

    // Move only back in history
    if (activeIndex < index)
      return;

    // Push new node section path
    yield put(push.newNodeSectionPath(section));
  }
}

function* navigateToNextSection(getState) {
  while (true) {
    yield take(actions.NAVIGATE_TO_NEXT_SECTION);

    const state = getState(),
      node = selectors.node(state),
      activeSection = selectors.activeSection(state),
      { nodeAttrs } = activeSection;

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
    }

    const sections = selectors.sections(state),
      nextIndex = sections.indexOf(activeSection) + 1,
      nextSection = sections.get(nextIndex);

    yield put(push.newNodeSectionPath(nextSection));
  }
}

function* fetchCategories() {
  yield put(categoriesActions.fetch());
}

function* watchMarkerMoved() {
  // Run updateMap saga until ...
  const updateMapTask = yield fork(updateMap);

  // ... marker was moved.
  yield take(actions.MARKER_MOVED);
  yield cancel(updateMapTask);
}

function* watchChangeNodeAddress(getState) {
  // Run updateAddress saga until ...
  const updateAddressTask = yield fork(updateAddress, getState);

  // ... node address was changed by the user.
  yield take(actions.CHANGE_NODE_ADDRESS);
  yield cancel(updateAddressTask);
}

function* updateMap() {
  try {
    while (true) {
      const { payload: node } = yield take(actions.CHANGE_NODE_ADDRESS);

      // Change node
      yield put(actions.changeNode(node));

      const address = node.address(),
        feature = yield photon.geocode(address);

      // Restart daemon if no feature was found.
      if (feature == null)
        continue;

      const [lon, lat] = feature.geometry.coordinates,
        center = { lat, lon };

      yield put(actions.changeMapCenter(center));
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return console.log('Canceled update Map.');

    throw error;
  }
}

function* updateAddress(getState) {
  try {
    while (true) {
      const { payload: location } = yield take(actions.MARKER_MOVED);

      const feature = yield photon.reverseGeocode(location);

      const state = getState(),
        node = selectors.node(state),
        { properties: { city, street, postcode, housenumber } } = feature,
        { lat, lon } = location;

      yield put(actions.changeNode(node.merge({
        city, street,
        postcode, housenumber,
        lat, lon
      })));
    }
  } catch(error) {
    if (error instanceof SagaCancellationException)
      return console.log('Canceled update Address.');

    throw error;
  }
}

function* fetchSimilar() {
  while(true) {
    const { payload: node } = yield take(({ type, payload: section }) => {
      return type === actions.ACTIVATE_SECTION && section === sections.SIMILAR_NODES.id;
    });

    const { name, lat, lon } = node,
      features = yield photon.search(name, { lat, lon, limit: 5, osm_tag: 'amenity' });

    if (features.length === 0) {
      yield put(actions.navigateToNextSection(sections.SIMILAR_NODES));
      continue;
    }

    yield put(actions.setSimilar(features.map(Node.fromFeature)));
  }
}

function* resetErrors() {
  while(true) {
    yield take(actions.ACTIVATE_SECTION);
    yield put(actions.setErrors({}));
  }
}

module.exports = [
  changeNodeAddress,
  navigateToSection,
  navigateToNextSection,
  fetchCategories,
  fetchSimilar,
  watchMarkerMoved,
  watchChangeNodeAddress,
  resetErrors
];