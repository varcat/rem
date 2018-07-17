const {curry} = require('../essential/curry.js');

const replace = curry((re, rpl, str) => str.replace(re, rpl));

module.exports = {
  replace,
};