const { Record, List } = require('immutable');

class Section extends Record({
  id: null,
  // Attrs in this section, which can have errors
  nodeAttrs: List()
}) {
  toString() {
    return this.id;
  }
}

module.exports = Section;