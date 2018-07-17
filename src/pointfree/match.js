const {curry} = require('../essential/curry.js');

const match = curry((re, str) => {
  if (typeof re === 'string') {
    return str.includes(re);
  }
  return re.test(str);
});

module.exports = {
  match,
};