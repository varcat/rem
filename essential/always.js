import {curry} from './curry.js';

export const always = curry((a, _) => a);