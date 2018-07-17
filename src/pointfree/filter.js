const {curry} = require('../essential/curry.js');

const filter = curry((fn, xs) => xs.filter(fn));

module.exports = {
  filter,
};