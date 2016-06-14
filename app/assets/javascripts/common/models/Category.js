const { Record, List } = require('immutable');

module.exports = Record({
  id: null,
  identifier: null,
  node_types: List(),
  active: true
});