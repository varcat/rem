import {curry} from './essential';

export const always = curry((a, _) => a);