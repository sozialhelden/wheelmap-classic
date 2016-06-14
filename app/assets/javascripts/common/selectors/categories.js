const { createSelector } = require('reselect');

const categoriesSelector = state => state.categories;

const activeCategoriesSelector = createSelector(
  categoriesSelector,
  categories => categories.filter(category => category.active)
);

module.exports = {
  categoriesSelector,
  activeCategoriesSelector
};