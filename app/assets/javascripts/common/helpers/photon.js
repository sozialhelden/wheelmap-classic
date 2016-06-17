import { fetchJSON } from './api';
import setParams from './setParams';

const PHOTON = '//photon.komoot.de';
const PHOTON_API = `${PHOTON}/api`;
const PHOTON_REVERSE = `${PHOTON}/reverse`;

export function search(query, params = {}) {
  const url = setParams(PHOTON_API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}

export function geocode(query) {
  return search(query, { limit: 1 })
    .then(response => {
      return response[0];
    });
}

export function reverseGeocode({ lat, lon }) {
  const url = setParams(PHOTON_REVERSE, { lat, lon });

  return fetchJSON(url)
    .then(response => response.features[0]);
}
