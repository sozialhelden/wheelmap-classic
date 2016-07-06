import { Map, Seq } from 'immutable';
import { handleActions } from 'redux-actions';

import { FETCH_CATEGORIES } from '../actions/categories';
import NodeType from '../models/NodeType';

export default handleActions({
  [FETCH_CATEGORIES]: (state, { payload: { nodeTypes } }) => (
    new Seq(nodeTypes)
      .map(nodeType => new NodeType(nodeType))
      .toKeyedSeq()
      .mapKeys((key, nodeType) => nodeType.id)
      .toMap()
  )
}, new Map());
