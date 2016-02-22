import { Record, List } from 'immutable';

export default class Section extends Record({
  id: null,
  // Attrs in this section, which can have errors
  nodeAttrs: List()
}) {
  toString() {
    return this.id;
  }
}