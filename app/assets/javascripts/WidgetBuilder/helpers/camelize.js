const camelCase = require('mout/string/camelCase');
const forEach = require('mout/collection/forEach');

module.exports = function(data) {
  let camelizedData = {};

  forEach(data, function(value, key) {
    camelizedData[camelCase(key)] = value;
  });

  return camelizedData;
};