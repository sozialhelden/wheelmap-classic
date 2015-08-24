const { Map, Seq } = require('immutable');
const { handleActions } = require('redux-actions');

const { FETCH_CATEGORIES } = require('../actions/categories');
const NodeType = require('../models/NodeType');

module.exports = handleActions({
  [FETCH_CATEGORIES]: (state, { payload: { nodeTypes } }) => {
    return Seq(nodeTypes)
      .map(nodeType => new NodeType(nodeType))
      .toKeyedSeq()
      .mapKeys((key, nodeType) => nodeType.id)
      .toMap();
  }
}, Map());