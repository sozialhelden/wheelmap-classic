jest.dontMock('../fetchCategories');

import { put } from 'redux-saga/effects';

import categoriesActions from '../../../common/actions/categories';

const fetchCategories = require('../fetchCategories').default;

describe('fetchCategories', () => {
  it('fetches categories on initialization', () => {
    const generator = fetchCategories();

    categoriesActions.fetch
      .mockReturnValue('fetch categories');

    expect(generator.next().value)
      .toEqual(put(categoriesActions.fetch()));

    expect(generator.next().done)
      .toBe(true);
  });
});