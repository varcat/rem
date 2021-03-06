const {curry} = require('../essential/curry.js');

const concat = curry((a, b) => a.concat(b));

module.exports = {
  concat,
};
