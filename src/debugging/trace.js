const {curry} = require('../essential/curry.js');

const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

module.exports = {
  trace,
};