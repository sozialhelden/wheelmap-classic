import { stringify, parse } from 'query-string';

export {
  stringify,
  parse as parseString
};

export function insert(url, query) {
  const queryString = stringify(query);

  if (queryString === '') {
    return url;
  }

  return `${url}?${queryString}`;
}
