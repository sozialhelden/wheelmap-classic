import setParam from 'mout/queryString/setParam';
import reduce from 'mout/collection/reduce';

export default function (url, params) {
  return reduce(params, (url, value, param) => (
    setParam(url, param, value)
  ));
}
