import { take, put, select, call, cancel, fork } from 'redux-saga/effects';

function createEventMatcher(eventCreator) {
  return (util, customEqualityTesters) => {
    return {
      compare(actual, ...args) {
        return {
          pass: util.equals(actual, eventCreator(...args), customEqualityTesters)
        };
      }
    };
  };
}

beforeEach(() => {
  jasmine.addMatchers({
    toTake: createEventMatcher(take),
    toPut: createEventMatcher(put),
    toSelect: createEventMatcher(select),
    toCall: createEventMatcher(call),
    toCancel: createEventMatcher(cancel),
    toFork: createEventMatcher(fork)
  });
});