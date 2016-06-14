jest.dontMock('../resetErrors');

import { ACTIVATE_SECTION, setErrors } from '../../actions';

const resetErrors = require('../resetErrors').default;

describe('resetErrors', () => {
  it('resets errors when section gets activated', () => {
    const gen = resetErrors();

    expect(gen.next().value)
      .toTake(ACTIVATE_SECTION);

    expect(gen.next().value)
      .toPut(setErrors({}));

    expect(gen.next().value)
      .toTake(ACTIVATE_SECTION);
  });
});