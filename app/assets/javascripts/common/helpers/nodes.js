import { fetchJSON } from './api';
import setParams from './setParams';

const API = '/nodes/similar';

export function findSimilar(query, params = {}) {
  const url = setParams(API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}
