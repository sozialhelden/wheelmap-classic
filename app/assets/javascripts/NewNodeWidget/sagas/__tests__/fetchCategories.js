import { fetch } from '../../../common/actions/categories';
import fetchCategories from '../fetchCategories';

jest.unmock('../fetchCategories');

describe('fetchCategories', () => {
  it('fetches categories on initialization', () => {
    const generator = fetchCategories();

    expect(generator.next())
      .toPut(fetch());

    expect(generator.next().done)
      .toBe(true);
  });
});
