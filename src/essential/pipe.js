export function pipe(fns) {
  return (...args) => {
    return fns.reduce((res, fn) => {
      return [fn.call(null, res)];
    }, args)[0];
  };
}