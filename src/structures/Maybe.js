const {inspect} = require('../essential/inspect.js');

class Maybe {
  constructor(x) {
    this.$value = x;
  }

  static of(x) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  map(fn) {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }

  inspect() {
    return this.isNothing ? 'Nothing' : `Just(${inspect(this.$value)})`;
  }
}

module.exports = {
  MayBe: Maybe,
};
