import { Map, List, fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import sections from '../models/sections';
import * as actions from '../actions';
import Node from '../../common/models/Node';

export const DEFAULT_STATE = new Map({
  activeSection: null,
  sections,
  node: new Node(),
  mapCenter: new Map({ lat: 52.520007, lon: 13.404954 }),
  mapZoom: 14,
  similarNodes: new List(),
  errors: new Map(),
  loading: false,
  nodeAddressLoading: false,
  nodeCenterLoading: false
});

export default handleActions({
  [actions.ACTIVATE_SECTION]: (state, { payload: activeSection }) => (
    state.set('activeSection', activeSection)
  ),
  [actions.CHANGE_NODE]: (state, { payload: node }) => (
    state.set('node', node)
  ),
  [actions.CHANGE_MAP_CENTER]: (state, { payload: center }) => (
    state.set('mapCenter', new Map(center))
  ),
  [actions.CHANGE_MAP_ZOOM]: (state, { payload: zoom }) => (
    state.set('mapZoom', zoom)
  ),
  [actions.SET_SIMILAR]: (state, { payload: similarNodes }) => (
    state.set('similarNodes', new List(similarNodes))
  ),
  [actions.SET_ERRORS]: (state, { payload: errors }) => (
    state.set('errors', fromJS(errors))
  ),
  [actions.LOAD]: (state, { payload: loading }) => (
    state.set('loading', loading)
  ),
  [actions.LOAD_NODE_ADDRESS]: (state, { payload: nodeAddressLoading }) => (
    state.set('nodeAddressLoading', nodeAddressLoading)
  ),
  [actions.LOAD_NODE_CENTER]: (state, { payload: nodeCenterLoading }) => (
    state.set('nodeCenterLoading', nodeCenterLoading)
  )
}, DEFAULT_STATE);
