const { OrderedMap, Map, List } = require('immutable');
const { createAction, handleActions } = require('redux-actions');

const SectionModel = require('../models/nodes.widget_new.section');
const { push } = require('./common.router');

const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const ACTIVATE_NEXT_SECTION = 'ACTIVATE_NEXT_SECTION';

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
}, Map({
  sections: List(
    SectionModel.TYPES.map(id => {
      return new SectionModel({
        id,
        key: SectionModel.KEYS[id]
      });
    })
  )
}));

const activateSection = createAction(ACTIVATE_SECTION);

const navigateToSection = function(section) {
  return push.newNodeSectionPath(section.key);
};

const navigateToNextSection = function() {
  return function(dispatch, getState) {
    let sections = getState().get('sections'),
      index = sections.findIndex(section => section.active),
      nextIndex = index + 1;

    dispatch(navigateToSection(sections.get(nextIndex)));
  };
};

reducer.activateSection = activateSection;
reducer.navigateToSection = navigateToSection;
reducer.navigateToNextSection = navigateToNextSection;

module.exports = reducer;