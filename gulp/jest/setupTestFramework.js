import { take, put, select, call } from 'redux-saga/effects';

global.expectNext = (generator, object = null) => {
  const { value, done } = generator.next(object);

  return {
    value: expect(value),
    done: expect(done)
  };
};

global.expectThrow = (generator, object = null) => {
  const { value, done } = generator.throw(object);

  return {
    value: expect(value),
    done: expect(done)
  };
};