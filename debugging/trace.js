import {curry} from '../essential/index.js';

export const trace = curry((tag, x) => {
  console.log(tag, x);
  return x;
});