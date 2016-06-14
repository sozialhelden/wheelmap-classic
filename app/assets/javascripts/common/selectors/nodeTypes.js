const { createSelector } = require('reselect');

const nodeTypesSelector = state => state.nodeTypes;

module.exports = {
  nodeTypesSelector
};