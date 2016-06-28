import { take, put, select, call, cancel, fork } from 'redux-saga/effects';
import immutableMatchers from 'jasmine-immutable-matchers';

function createEventMatcher(eventCreator) {
  return (util, customEqualityTesters) => ({
    compare: (actual, ...args) => ({
      pass: util.equals(actual.value, eventCreator(...args), customEqualityTesters)
    })
  });
}

const eventMatchers = {
  toTake: createEventMatcher(take),
  toPut: createEventMatcher(put),
  toSelect: createEventMatcher(select),
  toCall: createEventMatcher(call),
  toCancel: createEventMatcher(cancel),
  toFork: createEventMatcher(fork)
};

beforeEach(() => {
  jasmine.addMatchers(eventMatchers);
  jasmine.addMatchers(immutableMatchers);
});
