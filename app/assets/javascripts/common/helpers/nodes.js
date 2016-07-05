import { insert } from '../helpers/query';

import { fetchJSON } from './api';

const API = '/nodes/similar';

export function findSimilar(query, params = {}) {
  const url = insert(API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}
