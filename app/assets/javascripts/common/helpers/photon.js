const { fetchJSON } = require('./api');
const setParams = require('./setParams');

const PHOTON = 'http://photon.komoot.de';
const PHOTON_API = PHOTON + '/api';
const PHOTON_REVERSE = PHOTON + '/reverse';

function search(query, params = {}) {
  const url = setParams(PHOTON_API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}

function geocode(query) {
  return search(query, { limit: 1 })
    .then(response => {
      return response[0];
    });
}

function reverseGeocode({ lat, lon }) {
  const url = setParams(PHOTON_REVERSE, { lat, lon });

  return fetchJSON(url)
    .then(response => response.features[0]);
}

module.exports = {
  search,
  geocode,
  reverseGeocode
};