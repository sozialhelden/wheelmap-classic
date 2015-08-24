const debounce = require('mout/function/debounce');

function debouncePromise(factory, delay, isAsap = false) {
  const debouncedFactory = debounce((resolve, context, args) => {
    resolve(factory.apply(context, args));
  }, delay, isAsap);

  return function(...args) {
    return new Promise(resolve => {
      debouncedFactory(resolve, args, this);
    });
  }
}

module.exports = debouncePromise;