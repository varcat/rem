const {trace} = require('./debugging/trace.js');
const {getType} = require('./debugging/getType.js');

const {always} = require('./essential/always.js');
const {compose} = require('./essential/compose.js');
const {curry} = require('./essential/curry.js');
const {identity} = require('./essential/identity.js');
const {inspect} = require('./essential/inspect.js');
const {pipe} = require('./essential/pipe.js');

const {add} = require('./pointfree/add.js');
const {concat} = require('./pointfree/concat.js');
const {eq} = require('./pointfree/eq.js');
const {filter} = require('./pointfree/filter.js');
const {flip} = require('./pointfree/flip.js');
const {forEach} = require('./pointfree/forEach.js');
const {head} = require('./pointfree/head.js');
const {intercalate} = require('./pointfree/intercalate.js');
const {last} = require('./pointfree/last.js');
const {map} = require('./pointfree/map.js');
const {match} = require('./pointfree/match.js');
const {includes} = require('./pointfree/includes.js');
const {prop} = require('./pointfree/prop.js');
const {reverse} = require('./pointfree/reverse.js');
const {replace} = require('./pointfree/replace.js');
const {reduce} = require('./pointfree/reduce.js');
const {sort} = require('./pointfree/sort.js');
const {sortBy} = require('./pointfree/sortBy.js');
const {toLowerCase} = require('./pointfree/toLowerCase.js');
const {toUpperCase} = require('./pointfree/toUpperCase.js');
const {toString} = require('./pointfree/toString.js');
const {split} = require('./pointfree/split.js');
const {slice} = require('./pointfree/slice.js');
const {take} = require('./pointfree/take.js');

const {MayBe} = require('./structures/MayBe.js');

module.exports = {
  trace,
  always,
  compose,
  curry,
  identity,
  pipe,
  add,
  concat,
  eq,
  filter,
  flip,
  forEach,
  head,
  intercalate,
  last,
  map,
  match,
  includes,
  prop,
  reverse,
  replace,
  reduce,
  sort,
  sortBy,
  toUpperCase,
  toString,
  toLowerCase,
  split,
  slice,
  take,
  getType,
  inspect,
  MayBe,
};
