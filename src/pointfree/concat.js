const {curry} = require('../essential/index');

export const concat = curry((a, b) => a.concat(b));