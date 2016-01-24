const fetch = require('isomorphic-fetch');

const { categoriesPath } = global.Routes;

const API = {
  fetch(url, options = {}) {
    return fetch(url, options);
  },

  fetchJSON(url, options = {}) {
    return this.fetch(url, options)
      .then(response => response.json());
  },

  fetchCategories() {
    return this.fetchJSON(categoriesPath());
  }
};

module.exports = API;