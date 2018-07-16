const {curry} = require('../essential/index');

const add = curry((a, b) => a + b);

module.exports = {
  add,
};