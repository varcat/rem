export function compose(...fns) {
  return (...args) => {
    return fns.reduceRight((res, fn) => {
      return [fn.call(null, ...res)];
    }, args)[0];
  };
}