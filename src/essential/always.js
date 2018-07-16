const {curry} = require('./curry');

export const always = curry((a, _) => a);