function pipe(...fns) {
  return (...args) => {
    return fns.reduce((res, fn) => {
      return [fn.apply(null, res)];
    }, args)[0];
  };
}

module.exports = {
  pipe,
};