const {curry} = require('../essential/curry.js');

const includes = curry((searchValue, xs) => xs.includes(searchValue));

module.exports = {
  includes,
};