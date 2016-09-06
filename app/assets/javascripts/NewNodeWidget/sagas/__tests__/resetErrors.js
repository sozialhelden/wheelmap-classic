import { ACTIVATE_SECTION, setErrors } from '../../actions';
import resetErrors from '../resetErrors';

jest.unmock('../resetErrors');

describe('resetErrors', () => {
  it('resets errors when section gets activated', () => {
    const gen = resetErrors();

    expect(gen.next())
      .toTake(ACTIVATE_SECTION);

    expect(gen.next())
      .toPut(setErrors({}));

    // Enldess Loop
    expect(gen.next())
      .toTake(ACTIVATE_SECTION);
  });
});
