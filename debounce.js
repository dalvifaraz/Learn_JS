console.log("DEBOUNCE");
let count = 0;

function load() {
  console.log("LOADING....", count++);
}

function trailingDebounce(func, delay) {
  let timeoutId;
  let context = this;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
const optimizeDebounce = trailingDebounce(load, 1000);

document.querySelector("#db").addEventListener('keyup', () => {
  optimizeDebounce();
});
