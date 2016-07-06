import { Record, List } from 'immutable';

const SectionRecord = new Record({
  id: null,
  // Attrs in this section, which can have errors
  nodeAttrs: new List()
});

export default class Section extends SectionRecord {
  toString() {
    return this.id;
  }
}
