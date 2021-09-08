const obj = {
  a: 1,
  b: 'someText',
};

const log = val => console.log(val);

const module = (function iife() {
  const private = 'super secret';

  const logPrivate = () => console.log(private);

  return {
    logPrivate,
  };
})();

module.logPrivate();
