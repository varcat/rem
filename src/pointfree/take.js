const {curry} = require('../essential/curry.js');
const {slice} = require('./slice.js');

const take = curry((n, xs) => slice(0, n < 0 ? Infinity : n, xs));

module.exports = {
  take,
};