const obj = {
  a: 1,
  b: '9',
};

const f = arg => console.log(arg);

(function iife() {
  return obj;
})();
