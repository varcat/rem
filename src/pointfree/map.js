const {curry} = require('../essential/curry.js');

const map = curry((fn, xs) => xs.map(fn));

module.exports = {
  map,
};