const { Record } = require('immutable');

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

Section.TYPES = [
  Section.NAME_CATEGORY,
  Section.ADDRESS,
  Section.SIMILAR_NODES,
  Section.ACCESSIBILITY,
  Section.CONTACT,
  Section.OVERVIEW
];

Section.KEYS = {};

Section.TYPES.forEach(type => {
  Section.KEYS[type] = type.toLowerCase();
});

module.exports = Section;