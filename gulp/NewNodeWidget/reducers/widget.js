const { Map, List } = require('immutable');
const { handleActions } = require('redux-actions');

const { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('../models/sections');
const { ACTIVATE_SECTION, CHANGE_NODE } = require('../actions');
const { FETCH_CATEGORIES } = require('../../common/actions/categories');
const Node = require('../../common/models/node');

const DEFAULT_STATE = Map({
  activeSection: null,
  sections: List([NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW]),
  fetchedCategories: false,
  node: new Node()
});

module.exports = handleActions({
  [ACTIVATE_SECTION]: (state, { payload: activeSection }) => {
    return state.set('activeSection', activeSection);
  },
  [FETCH_CATEGORIES]: (state) => {
    return state.set('fetchedCategories', true);
  },
  [CHANGE_NODE]: (state, { payload: { field, value }}) => {
    return state.setIn(['node', field], value);
  }
}, DEFAULT_STATE);