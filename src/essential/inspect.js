const {getType} = require('../debugging/getType.js');
const {toString} = require('../pointfree/toString.js');

function inspectFn(f) {
  return f.name ? f.name : f.toString();
}

function inspectTerm(t) {
  if (getType(t) === 'String') {
    return `'${t}'`;
  }
  if (typeof t === 'object') {
    const ts = Object.keys(t).map(k => [k, inspect(t[k])]);
    return `{${ts.map(kv => kv.join(': ')).join(', ')}}`;
  }

  return toString(t);
}

function inspectArgs(args) {
  return Array.isArray(args) ? `[${args.map(inspect).join(', ')}]` : inspectTerm(args);
}

function inspect(x) {
  if (x && typeof x.inspect === 'function') {
    return x.inspect();
  }

  return (typeof x === 'function') ? inspectFn(x) : inspectArgs(x);
}

module.exports = {
  inspect,
};