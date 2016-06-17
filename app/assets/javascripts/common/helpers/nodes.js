const { fetchJSON } = require('./api');
const setParams = require('./setParams');

const API = '/nodes/similar';

function findSimilar(query, params = {}) {
  const url = setParams(API, { ...params, q: query });

  return fetchJSON(url)
    .then(response => response.features);
}

module.exports = {
  similar: findSimilar
};
