const {curry} = require('../essential');

export const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});