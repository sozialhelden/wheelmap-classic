import camelCase from 'lodash.camelcase';
import forEach from 'lodash.foreach';

export default function (data) {
  const camelizedData = {};

  forEach(data, (value, key) => {
    camelizedData[camelCase(key)] = value;
  });

  return camelizedData;
}
