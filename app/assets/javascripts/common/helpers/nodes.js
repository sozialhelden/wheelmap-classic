import { insert } from '../helpers/query';

import { fetchJSON } from './api';

const API = '/nodes/similar';

export function findSimilar(query, params = {}) { // eslint-disable-line import/prefer-default-export
  const url = insert(API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}
