const fetch = require('isomorphic-fetch');

const { categoriesPath } = global.Routes;

function fetchJSON(url, options = {}) {
  return fetch(url, options)
    .then(response => response.json());
}

function fetchCategories() {
  return fetchJSON(categoriesPath({ format: 'json' }))
    .then(({ categories, node_types }) => ({ categories, nodeTypes: node_types }));
}

module.exports = {
  fetchJSON,
  fetchCategories
};