const setParam = require('mout/queryString/setParam');
const reduce = require('mout/collection/reduce');

module.exports = function(url, params) {
  return reduce(params, (url, value, param) => {
    return setParam(url, param, value);
  }, url);
};
