const START = 'START';
const ACTIVATE_SECTION = 'ACTIVATE_SECTION';

function start() {
  return { type: START };
}

function activateSection(section) {
  return { type: ACTIVATE_SECTION, section };
}

module.exports = {
  START,
  ACTIVATE_SECTION,
  start,
  activateSection
};