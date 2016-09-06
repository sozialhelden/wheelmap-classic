import { stringify } from 'query-string';

import { insert } from '../query';

jest.unmock('../query');

describe('insert', () => {
  const url = 'http://wheelmap.org/';

  it('inserts no query string for empty objects', () => {
    const query = {};

    expect(insert(url, query))
      .toEqual(url);
  });

  it('inserts query string for filled objects', () => {
    const query = { node_id: 1 };
    const queryString = stringify(query);

    expect(insert(url, query))
      .toEqual(`${url}?${queryString}`);
  });
});
