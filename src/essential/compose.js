function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return [fn.apply(null, res)];
    }, args)[0];
  };
}

module.exports = {
  compose,
};