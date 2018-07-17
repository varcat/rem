const {curry} = require('../essential/curry.js');

const sortBy = curry((fn, xs) => [...xs].sort((a, b) => {
  const aa = fn(a);
  const bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
}));

module.exports = {
  sortBy,
};