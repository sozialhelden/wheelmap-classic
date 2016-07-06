import { combineReducers } from 'redux';

import categories from '../../common/reducers/categories';
import nodeTypes from '../../common/reducers/nodeTypes';

import widget from './widget';

export default combineReducers({
  widget,
  categories,
  nodeTypes
});
