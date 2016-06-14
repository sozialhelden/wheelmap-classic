const { combineReducers } = require('redux');

const widget = require('./widget');
const categories = require('../../common/reducers/categories');
const nodeTypes = require('../../common/reducers/nodeTypes');

module.exports = combineReducers({ widget, categories, nodeTypes });