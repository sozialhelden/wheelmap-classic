function delayPromise(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

module.exports = delayPromise;