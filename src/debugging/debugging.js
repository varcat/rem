import {curry} from '../essential/curry';

export const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});