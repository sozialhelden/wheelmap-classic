import { PropTypes } from 'react';

import { Node, Category, NodeType } from '../models';

const { instanceOf } = PropTypes;

export { immutableList, immutableListOf, immutableMap, immutableMapOf } from './immutable';

export const node = instanceOf(Node);
export const nodeType = instanceOf(NodeType);
export const category = instanceOf(Category);
