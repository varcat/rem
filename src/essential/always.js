const {curry} = require('./curry.js');
const always = curry((a, _) => a);
module.exports = {
  always,
};