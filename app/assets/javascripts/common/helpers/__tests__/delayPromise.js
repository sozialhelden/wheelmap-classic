jest.unmock('../delayPromise');

import delayPromise from '../delayPromise';

describe('delayPromise', () => {
  it('resolves after certain delay', () => {
    const callback = jest.fn();

    const promise = delayPromise(100)
      .then(callback);

    jest.runAllTimers();

    return promise.then(() => {
      expect(callback)
        .toBeCalled();
    });
  });
});
