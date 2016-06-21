import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';

import { stringify, parseString } from './query';

export default function (options = {}) {
  return useRouterHistory(createHistory)({
    ...options,
    stringifyQuery: stringify,
    parseQueryString: parseString
  });
}
