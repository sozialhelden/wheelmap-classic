import fetch from 'isomorphic-fetch';
import size from 'lodash.size';

import Node from '../models/Node';
import routes from '../routes';

const { categoriesPath, validateNodePath, nodesPath } = routes;

export function HTTPError(response) {
  const message = `HTTPError: ${response.statusText}`;

  this.name = this.constructor.name;
  this.message = message;
  this.stack = (new Error()).stack;

  this.response = response;
}

HTTPError.prototype = Object.create(Error.prototype);
HTTPError.prototype.constructor = HTTPError;

HTTPError.is = function (error, status) {
  return error instanceof HTTPError && error.response.status === status;
};

export function fetchWithError(url, options = {}) {
  return fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response;
      }

      throw new HTTPError(response);
    });
}

export function fetchJSON(url, options = {}) {
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

export function postJSON(url, options = {}) {
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

export function fetchCategories() {
  return fetchJSON(categoriesPath({ format: 'json' }))
    .then(({ categories, node_types }) => ({ categories, nodeTypes: node_types }));
}

export function validateNode(node, attrs = null) {
  const options = { data: node.serialize(), credentials: 'same-origin' };

  return postJSON(validateNodePath({ format: 'json' }), options)
    .catch(error => (
      error.response.json()
        .then(data => {
          error.errors = Node.deserializeAttrs(data.errors);

          throw error;
        })
    ))
    .catch(error => {
      if (attrs == null || error.response.status !== 422) {
        throw error;
      }

      const { errors } = error;
      const sectionErrors = {};

      // No attrs in this section which can have an error or no errors occurred
      if (attrs.length === 0 || size(errors) === 0) {
        return error.response;
      }

      // Copy valid errors into a new section error object
      attrs.forEach(attr => {
        if (errors[attr]) {
          sectionErrors[attr] = errors[attr];
        }
      });

      // No errors in this section (maybe an error occurred in a section not filled with input by the user yet)
      if (size(sectionErrors) === 0) {
        return error.response;
      }

      error.errors = sectionErrors;

      throw error;
    });
}

export function saveNode(node) {
  const options = {
    data: node.serialize(),
    credentials: 'same-origin'
  };

  return postJSON(nodesPath({ format: 'json' }), options);
}
