import unCamelCase from 'mout/string/unCamelCase';
import forEach from 'mout/collection/forEach';

export default function(data) {
  let uncamelizedData = {};

  forEach(data, function(value, key) {
    uncamelizedData[unCamelCase(key, '_')] = value;
  });

  return uncamelizedData;
}