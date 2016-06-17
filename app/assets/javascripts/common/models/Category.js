const { Record, List } = require('immutable');

module.exports = new Record({
  id: null,
  identifier: null,
  node_types: new List(),
  active: true
});
