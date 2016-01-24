const { Map, List } = require('immutable');
const { handleActions } = require('redux-actions');

const { NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW } = require('./models/sections');
const { ACTIVATE_SECTION } = require('./actions');

const DEFAULT_STATE = Map({
  activeSection: null,
  sections: List([NAME_CATEGORY, ADDRESS, SIMILAR_NODES, ACCESSIBILITY, CONTACT, OVERVIEW])
});

module.exports = handleActions({
  [ACTIVATE_SECTION]: (state, { payload: activeSection }) => {
    return state.set('activeSection', activeSection);
  }
}, DEFAULT_STATE);