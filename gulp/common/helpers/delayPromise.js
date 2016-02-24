var Promise = require('promise');

function delayPromise(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

module.exports = delayPromise;