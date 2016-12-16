import { insert } from '../helpers/query';

import { fetchJSON } from './api';

const PHOTON = '//photon.komoot.de';
const PHOTON_API = `${PHOTON}/api`;
const PHOTON_REVERSE = `${PHOTON}/reverse`;

export function search(query, params = {}) {
  const url = insert(PHOTON_API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}

export function geocode(query) {
  return search(query, { limit: 3 });
}

export function reverseGeocode({ lat, lon }) {
  const url = insert(PHOTON_REVERSE, { lat, lon });

  return fetchJSON(url)
    .then(response => response.features[0]);
}
