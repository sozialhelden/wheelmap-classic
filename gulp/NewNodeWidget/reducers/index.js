const { combineReducers } = require('redux');

const widget = require('./widget');
const categories = require('../../common/reducers/categories');

module.exports = combineReducers({ widget, categories });