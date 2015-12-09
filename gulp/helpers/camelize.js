import camelCase from 'mout/string/camelCase';
import forEach from 'mout/collection/forEach';

export default function(data) {
  let camelizedData = {};

  forEach(data, function(value, key) {
    camelizedData[camelCase(key)] = value;
  });

  return camelizedData;
}