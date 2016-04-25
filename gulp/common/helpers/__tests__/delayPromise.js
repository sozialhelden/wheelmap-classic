jest.dontMock('../delayPromise');

const delayPromise = require('../delayPromise');

describe('delayPromise', () => {
  it('resolves after certain delay', () => {
    const callback = jest.genMockFn();

    delayPromise(100)
      .then(callback);

    jest.runAllTimers();
    jest.runAllTicks();

    expect(callback)
      .toBeCalled();
  });
});