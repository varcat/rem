const {curry} = require('../essential/curry.js');

const intercalate = curry((str, xs) => xs.join(str));

module.exports = {
  intercalate,
};