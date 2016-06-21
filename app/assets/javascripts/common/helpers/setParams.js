import setParam from 'mout/queryString/setParam';
import reduce from 'mout/collection/reduce';

export default function (url, params) {
  return reduce(params, (url, value, param) => {
    return setParam(url, param, value);
  }, url);
}
