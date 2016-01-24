const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');

module.exports = applyMiddleware(thunk)(createStore);