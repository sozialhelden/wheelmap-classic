const { Record, List } = require('immutable');

const Section = Record({
  id: null,
  key: null,
  active: false,
  done: false
});

Section.NAME_CATEGORY = 'NAME_CATEGORY';
Section.ADDRESS = 'ADDRESS';
Section.SIMILAR_NODES = 'SIMILAR_NODES';
Section.ACCESSIBILITY = 'ACCESSIBILITY';
Section.CONTACT = 'CONTACT';
Section.OVERVIEW = 'OVERVIEW';

Section.TYPES = List([
  Section.NAME_CATEGORY,
  Section.ADDRESS,
  Section.SIMILAR_NODES,
  Section.ACCESSIBILITY,
  Section.CONTACT,
  Section.OVERVIEW
]);

module.exports = Section;