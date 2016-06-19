import { combineReducers } from 'redux';

import widget from './widget';
import categories from '../../common/reducers/categories';
import nodeTypes from '../../common/reducers/nodeTypes';

export default combineReducers({
  widget,
  categories,
  nodeTypes
});
