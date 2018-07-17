const {curry} = require('../essential/curry.js');
const add = curry((a, b) => a + b);

module.exports = {
  add,
};
