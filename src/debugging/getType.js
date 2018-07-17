const {compose} = require('../essential/compose.js');
const {slice} = require('../pointfree/slice.js');

const getType = (x) => {
  if (x === undefined || x === null) {
    return compose(slice(8, -1))(Object.prototype.toString.call(x));
  }
  return x.constructor.name;
};

module.exports = {
  getType,
};