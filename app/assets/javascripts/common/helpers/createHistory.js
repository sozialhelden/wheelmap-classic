const { createHistory } = require('history');
const { useRouterHistory } = require('react-router');

const { stringify, parseString } = require('./query');

module.exports = function(options = {}) {
  return useRouterHistory(createHistory)({
    ...options,
    stringifyQuery: stringify,
    parseQueryString: parseString
  });
};