export default function delayPromise(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
