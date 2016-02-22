const fetch = require('isomorphic-fetch');
const size = require('mout/collection/size');

const Node = require('../models/Node');
const { categoriesPath, validateNodePath, nodesPath } = require('../routes');

function HTTPError(response) {
  const message = `HTTPError: ${response.statusText}`;

  this.name = this.constructor.name;
  this.message = message;
  this.stack = (new Error()).stack;

  this.response = response;

}

HTTPError.prototype = Object.create(Error.prototype);
HTTPError.prototype.constructor = HTTPError;

function fetchWithError(url, options = {}) {
  return fetch(url, options)
    .then(response => {
      if (response.ok)
        return response;

      throw new HTTPError(response);
    });
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

function validateNode(node, attrs = null) {
  const noErrors = {},
    options = { data: node.serialize(), credentials: 'same-origin' };

  return postJSON(validateNodePath({ format: 'json' }), options)
    .catch(error => {
      return error.response.json()
        .then(data => {
          error.errors = Node.deserializeAttrs(data.errors);

          throw error;
        });
    })
    .catch(error => {
      if (attrs == null || error.response.status !== 422)
        throw error;

      const { errors } = error,
        sectionErrors = {};

      // No attrs in this section which can have an error or no errors occurred
      if (attrs.length === 0 || size(errors) === 0)
        return error.response;

      // Copy valid errors into a new section error object
      attrs.forEach(attr => {
        if (errors[attr])
          sectionErrors[attr] = errors[attr];
      });

      // No errors in this section (maybe an error occurred in a section not filled with input by the user yet)
      if (size(sectionErrors) === 0)
        return error.response;

      error.errors = sectionErrors;

      throw error;
    });
}

function saveNode(node) {
  const options = {
    data: node.serialize(),
    credentials: 'same-origin'
  };

  return postJSON(nodesPath({ format: 'json' }), options);
}

module.exports = {
  HTTPError,
  fetchJSON,
  postJSON,
  fetchCategories,
  validateNode,
  saveNode
};