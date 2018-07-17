const {curry} = require('../essential/curry.js');

const slice = curry((fromIndex, toIndex, list) => list.slice(fromIndex, toIndex));

module.exports = {
  slice,
};