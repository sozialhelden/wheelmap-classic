const { OrderedMap, Map, List } = require('immutable');
const { createAction, handleActions } = require('redux-actions');

const SectionModel = require('../models/nodes.widget_new.section');
const { push } = require('./common.router');

const { newNodeSectionPath } = global.Routes;

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const ACTIVATE_NEXT_SECTION = 'ACTIVATE_NEXT_SECTION';

const sections = SectionModel.TYPES.map(id => {
  return new SectionModel({
    id,
    key: SectionModel.KEYS[id]
  });
});

const reducer = handleActions({
  [ACTIVATE_SECTION]: (state, { payload }) => {
    let sections = state.get('sections'),
      index = sections.findIndex(otherSection => otherSection.key === payload);

    // Reset done state to reflect path to new active section
    return state.set('sections', sections.map((otherSection, otherIndex) => {
      return otherSection.merge({
        done: otherIndex < index,
        active: otherIndex === index
      });
    }));
  }
}, Map({ sections: List(sections) }));

reducer.activateSection = createAction(ACTIVATE_SECTION);

reducer.navigateToSection = function(section) {
  return push(newNodeSectionPath(section.key));
};

reducer.navigateToNextSection = function() {
  return function(dispatch, getState) {
    let sections = getState().get('sections'),
      index = sections.findIndex(section => section.active),
      nextIndex = index + 1;

    dispatch(reducer.navigateToSection(sections.get(nextIndex)));
  };
};

module.exports = reducer;