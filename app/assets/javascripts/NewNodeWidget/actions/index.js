import { createAction } from 'redux-actions';

export const ENTER_CONTENT = 'ENTER_CONTENT';
export const LOAD = 'LOAD';
export const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
export const CHANGE_NODE = 'CHANGE_NODE';
export const MARKER_MOVED = 'MARKER_MOVED';
export const CHANGE_MAP_CENTER = 'CHANGE_MAP_CENTER';
export const CHANGE_MAP_ZOOM = 'CHANGE_MAP_ZOOM';
export const SET_SIMILAR = 'SET_SIMILAR';
export const SET_ERRORS = 'SET_ERRORS';
export const NAVIGATE_TO_SECTION = 'NAVIGATE_TO_SECTION';
export const NAVIGATE_TO_NEXT_SECTION = 'NAVIGATE_TO_NEXT_SECTION';
export const CHANGE_NODE_ADDRESS = 'CHANGE_NODE_ADDRESS';
export const UPDATE_MAP = 'UPDATE_MAP';
export const SAVE_NODE = 'SAVE_NODE';

export const enterContent = createAction(ENTER_CONTENT, (nextState) => {
  return {
    section: nextState.params.section,
    node: nextState.location.query.node
  };
});
export const load = createAction(LOAD);
export const activateSection = createAction(ACTIVATE_SECTION);
export const changeNode = createAction(CHANGE_NODE);
export const markerMoved = createAction(MARKER_MOVED);
export const changeNodeAddress = createAction(CHANGE_NODE_ADDRESS);
export const changeMapCenter = createAction(CHANGE_MAP_CENTER);
export const changeMapZoom = createAction(CHANGE_MAP_ZOOM);
export const setErrors = createAction(SET_ERRORS);
export const navigateToSection = createAction(NAVIGATE_TO_SECTION);
export const navigateToNextSection = createAction(NAVIGATE_TO_NEXT_SECTION);
export const updateMap = createAction(UPDATE_MAP);
export const setSimilar = createAction(SET_SIMILAR);
export const saveNode = createAction(SAVE_NODE);

// @TODO Remove when we every module uses es6 imports.
export default {
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