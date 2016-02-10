const fetch = require('isomorphic-fetch');

const Node = require('../models/Node');

const { categoriesPath, validateNodePath } = global.Routes;

function fetchWithError(url, options = {}) {
  return fetch(url, options)
    .then(response => {
      if (response.ok)
        return response;

      const error = new Error(response.statusText);
      error.response = response;

      throw error;
    })
}

function fetchJSON(url, options = {}) {
  const { headers, ...otherOptions } = options;

  options = {
    headers: {
      Accept: 'application/json',
      ...headers
    },
    ...otherOptions
  };

  return fetchWithError(url, options)
    .then(response => response.json());
}

function postJSON(url, options = {}) {
  const { headers, data, ...otherOptions } = options;

  options = {
    ...otherOptions,
    method: 'post',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  return fetchJSON(url, options);
}

function fetchCategories() {
  return fetchJSON(categoriesPath({ format: 'json' }))
    .then(({ categories, node_types }) => ({ categories, nodeTypes: node_types }));
}

function validateNode(node) {
  const noErrors = {},
    options = { data: node.serialize() };

  return postJSON(validateNodePath({ format: 'json' }), options)
    .then(response => noErrors)
    .catch(error => {
      return error.response.json()
        .then(data => Node.unserializeAttrs(data.errors));
    });
}

module.exports = {
  fetchJSON,
  postJSON,
  fetchCategories,
  validateNode
};