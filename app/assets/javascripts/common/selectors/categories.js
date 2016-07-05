import { createSelector } from 'reselect';

export const categoriesSelector = state => state.categories;

export const activeCategoriesSelector = createSelector(
  categoriesSelector,
  categories => categories.filter(category => category.active)
);
