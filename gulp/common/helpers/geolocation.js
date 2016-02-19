module.exports = function geolocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation)
      throw new Error('No geolocation API');

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};