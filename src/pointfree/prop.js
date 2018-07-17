const {curry} = require('../essential/curry.js');

const prop = curry((p, obj) => obj[p]);

module.exports = {
  prop,
};