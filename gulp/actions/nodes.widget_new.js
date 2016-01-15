const START = 'START';
const ACTIVATE_SECTION = 'ACTIVATE_SECTION';
const ACTIVATE_NEXT_SECTION = 'ACTIVATE_NEXT_SECTION';

function start() {
  return { type: START };
}

function activateSection(section) {
  return { type: ACTIVATE_SECTION, section };
}

function activateNextSection(section) {
  return { type: ACTIVATE_NEXT_SECTION, section };
}

module.exports = {
  START,
  ACTIVATE_SECTION,
  ACTIVATE_NEXT_SECTION,
  start,
  activateSection,
  activateNextSection
};