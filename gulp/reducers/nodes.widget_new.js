const { Map } = require('immutable');
const Section = require('../models/nodes.widget_new.section');

const { createAction, handleActions } = require('redux-actions');

const START = 'START';
const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const ACTIVATE_NEXT_SECTION = 'ACTIVATE_NEXT_SECTION';

let sections = Section.TYPES.map(id => new Section({ id, key: id.toLowerCase() }));

module.exports = handleActions({
  [START]: state => state.setIn(['sections', 0, 'active'], true),

  [ACTIVATE_SECTION]: (state, action) => {
    let section = action.payload;

    // Do not activate old state if its not done yet.
    if (!section.done)
      return state;

    let sections = state.get('sections'),
      index = sections.findIndex(otherSection => otherSection.id === section.id);

    // Reset done state to reflect path to new active section
    return state.set('sections', sections.map((otherSection, otherIndex) => {
      return otherSection.merge({
        done: otherIndex < index,
        active: otherIndex === index
      });
    }));
  },

  [ACTIVATE_NEXT_SECTION]: (state, action) => {
    let sections = state.get('sections'),
      index = sections.findIndex(section => section.active),
      nextIndex = index + 1;

    // Last section
    if (nextIndex === sections.size)
      return state;

    sections = sections.map(function(section, index) {
      return section.merge({
        done: index < nextIndex,
        active: index === nextIndex
      });
    });

    return state.set('sections', sections);
  }
}, Map({ sections }));

module.exports.start = createAction(START);
module.exports.activateSection = createAction(ACTIVATE_SECTION);
module.exports.activateNextSection = createAction(ACTIVATE_NEXT_SECTION);