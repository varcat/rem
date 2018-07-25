const {curry} = require('../essential/curry.js');

const map = curry((fn, anyFunctor) => anyFunctor.map(fn));

module.exports = {
  map,
};
