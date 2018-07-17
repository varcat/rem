const reverse = x => Array.isArray(x) ? [...x].reverse() : x.split('').reverse().join('');

module.exports = {
  reverse,
};