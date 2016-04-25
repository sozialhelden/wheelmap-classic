jest.dontMock('../fetchCategories');

import categoriesActions from '../../../common/actions/categories';

const fetchCategories = require('../fetchCategories').default;

describe('fetchCategories', () => {
  it('fetches categories on initialization', () => {
    const generator = fetchCategories();

    categoriesActions.fetch
      .mockReturnValue('fetch categories');

    expect(generator.next().value)
      .toPut(categoriesActions.fetch());

    expect(generator.next().done)
      .toBe(true);
  });
});