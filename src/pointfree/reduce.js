const {curry} = require('../essential/curry.js');

const reduce = curry((fn, initValue, xs) => xs.reduce(fn, initValue));

module.exports = {
  reduce,
};