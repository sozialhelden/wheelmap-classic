jest.dontMock('../Section');

const Section = require('../Section').default;

describe('Section', () => {

  it('has toString', () => {
    const section = new Section({
      id: 'test'
    });

    expect(section.toString())
      .toBe('test');
  });

});