const {curry} = require('./curry.js');

const maybe = curry((v, f, maybeClass) => {
    if (maybeClass.isNothing) {
        return v;
    }
    return f(maybeClass.$value);
});

module.exports = {
    maybe,
};
