const {curry} = require('../essential/curry.js');

const split = curry((sep, str) => str.split(sep));

module.exports = {
  split,
};