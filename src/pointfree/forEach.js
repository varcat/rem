const {curry} = require('../essential/curry.js');

const forEach = curry((fn, xs) => xs.forEach(fn));

module.exports = {
  forEach,
};