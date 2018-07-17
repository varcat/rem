const {curry} = require('../essential/curry.js');

const flip = curry((fn, ...args) => fn.apply(null, args.reverse()));

module.exports = {
  flip,
};