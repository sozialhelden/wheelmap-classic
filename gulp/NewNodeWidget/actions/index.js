const { createAction } = require('redux-actions');

const { search } = require('../../common/helpers/photon');
const Node = require('../../common/models/Node');

const ENTER_CONTENT = 'ENTER_CONTENT';
const LOAD = 'LOAD';
const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const CHANGE_NODE = 'CHANGE_NODE';
const MARKER_MOVED = 'MARKER_MOVED';
const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER';
const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM';
const SET_SIMILAR = 'SET_SIMILAR';
const SET_ERRORS = 'SET_ERRORS';
const NAVIGATE_TO_SECTION = 'NAVIGATE_TO_SECTION';
const NAVIGATE_TO_NEXT_SECTION = 'NAVIGATE_TO_NEXT_SECTION';
const CHANGE_NODE_ADDRESS = 'CHANGE_NODE_ADDRESS';
const UPDATE_MAP = 'UPDATE_MAP';
const SAVE_NODE = 'SAVE_NODE';

const enterContent = createAction(ENTER_CONTENT);
const load = createAction(LOAD);
const activateSection = createAction(ACTIVATE_SECTION);
const changeNode = createAction(CHANGE_NODE);
const markerMoved = createAction(MARKER_MOVED);
const changeNodeAddress = createAction(CHANGE_NODE_ADDRESS);
const changeMapCenter = createAction(CHANGE_MAP_CENTER);
const changeMapZoom = createAction(CHANGE_MAP_ZOOM);
const setErrors = createAction(SET_ERRORS);
const navigateToSection = createAction(NAVIGATE_TO_SECTION);
const navigateToNextSection = createAction(NAVIGATE_TO_NEXT_SECTION);
const updateMap = createAction(UPDATE_MAP);
const setSimilar = createAction(SET_SIMILAR);
const saveNode = createAction(SAVE_NODE);

module.exports = {
  ENTER_CONTENT,
  LOAD,
  ACTIVATE_SECTION,
  CHANGE_NODE,
  CHANGE_MAP_CENTER,
  CHANGE_MAP_ZOOM,
  MARKER_MOVED,
  CHANGE_NODE_ADDRESS,
  SET_SIMILAR,
  SET_ERRORS,
  NAVIGATE_TO_SECTION,
  NAVIGATE_TO_NEXT_SECTION,
  UPDATE_MAP,
  SAVE_NODE,
  enterContent,
  load,
  activateSection,
  changeNode,
  markerMoved,
  changeNodeAddress,
  changeMapCenter,
  changeMapZoom,
  setSimilar,
  setErrors,
  navigateToSection,
  navigateToNextSection,
  updateMap,
  saveNode
};