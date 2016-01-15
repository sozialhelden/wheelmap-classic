const { Map } = require('immutable');
const Section = require('../models/nodes.widget_new.section');
const { START, ACTIVATE_SECTION, ACTIVATE_NEXT_SECTION } = require('../actions/nodes.widget_new');

let sections = Section.TYPES.map(id => new Section({ id, key: id.toLowerCase() }));

const DEFAULT_STATE = Map({ sections });

function start(state) {
  // Set first section active.
  return state.setIn(['sections', 0, 'active'], true);
}

function activateSection(state, action) {
  let { section } = action;

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
}

function activateNextSection(state, action) {
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

module.exports = function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case START:
      return start(state, action);
    case ACTIVATE_SECTION:
      return activateSection(state, action);
    case ACTIVATE_NEXT_SECTION:
      return activateNextSection(state, action);
  }

  return state;
};