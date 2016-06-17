import unCamelCase from 'mout/string/unCamelCase';
import forEach from 'mout/collection/forEach';

export default function (data) {
  const uncamelizedData = {};

  forEach(data, (value, key) => {
    uncamelizedData[unCamelCase(key, '_')] = value;
  });

  return uncamelizedData;
}
