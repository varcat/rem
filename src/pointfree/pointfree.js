import {curry} from '../essential/curry';

// add :: Number -> Number -> Number
export const add = curry((a, b) => a + b);
// chain :: Monad m => (a -> m b) -> m a -> m b
export const chain = curry((fn, m) => m.chain());
// concat :: String -> String -> String
export const concat = curry((a, b) => a.concat(b));
// eq :: Eq a => a -> a -> Boolean
export const eq = curry((a, b) => a === b);
// filter :: (a -> Boolean) -> [a] -> [a]
export const filter = curry((fn, xs) => xs.filter(fn));

// flip :: (a -> b) -> (b -> a)
export function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return (...args) => {
    return func.apply(this, args.reverse());
  };
}

// forEach :: (a -> ()) -> [a] -> ()
export const forEach = curry((fn, xs) => xs.forEach(fn));
// head :: [a] -> a
export const head = xs => xs[0];
// intercalate :: String -> [String] -> String
export const intercalate = curry((str, xs) => xs.join(str));
// join :: Monad m => m (m a) -> m a
export const join = m => m.join();
// last :: [a] -> a
export const last = xs => xs[xs.length - 1];
// map :: Functor f => (a -> b) -> f a -> f b
export const map = curry((fn, xs) => xs.map(fn));
// match :: RegExp -> String -> Boolean
export const match = curry((re, str) => str.match(re));
// prop :: String -> Object -> a
export const prop = curry((p, obj) => obj[p]);
// reduce :: (b -> a -> b) -> b -> [a] -> b
export const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
// replace :: RegExp -> String -> String -> String
export const replace = curry((re, rpl, str) => str.replace(re, rpl));
// reverse :: [a] -> [a]
export const reverse = x => Array.isArray(x) ? x.reverse() : x.split('').reverse().join('');

