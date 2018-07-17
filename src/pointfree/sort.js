const {curry} = require('../essential/curry.js');

const sort = curry((comparator, list) => [...list].sort(comparator));

module.exports = {
  sort,
};