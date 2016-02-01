const { fetchJSON } = require('./api');

const PHOTON = 'http://photon.komoot.de';
const PHOTON_API = PHOTON + '/api';
const PHOTON_REVERSE = PHOTON + '/reverse';

function search(query) {
  return fetchJSON(PHOTON_API + '?q=' + query)
    .then(response => response.features);
}

function searchFirst(query) {
  return search(query)
    .then(response => {
      return response[0];
    });
}

module.exports = {
  search,
  searchFirst
};