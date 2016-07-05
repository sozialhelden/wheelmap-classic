import snakeCase from 'lodash.snakecase';
import forEach from 'lodash.foreach';

export default function (data) {
  const uncamelizedData = {};

  forEach(data, (value, key) => {
    uncamelizedData[snakeCase(key)] = value;
  });

  return uncamelizedData;
}
