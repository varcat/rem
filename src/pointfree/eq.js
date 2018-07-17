const {curry} = require('../essential/curry.js');

const eq = curry((a, b) => a === b);

module.exports = {
  eq,
};