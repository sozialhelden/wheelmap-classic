const unCamelCase = require('mout/string/unCamelCase');
const forEach = require('mout/collection/forEach');

module.exports = function(data) {
  let uncamelizedData = {};

  forEach(data, function(value, key) {
    uncamelizedData[unCamelCase(key, '_')] = value;
  });

  return uncamelizedData;
}