import camelCase from 'mout/string/camelCase';
import forEach from 'mout/collection/forEach';

export default function (data) {
  const camelizedData = {};

  forEach(data, (value, key) => {
    camelizedData[camelCase(key)] = value;
  });

  return camelizedData;
}
