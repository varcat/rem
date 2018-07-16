const {pipe, curry, compose, identity, always} = require('./essential');
const {trace} = require('./debugging');

module.exports = {
  always,
  compose,
  curry,
  identity,
  pipe,

  trace,
};
