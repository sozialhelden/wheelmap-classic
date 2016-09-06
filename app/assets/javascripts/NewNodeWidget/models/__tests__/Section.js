const Section = require('../Section').default;

jest.unmock('../Section');

describe('Section', () => {
  it('has toString', () => {
    const section = new Section({
      id: 'test'
    });

    expect(section.toString())
      .toBe('test');
  });
});
