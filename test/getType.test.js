const {getType} = require('../src/index.js');

class Foo {

}

describe('getType 函数测试', () => {
  test.each([
    [new Foo(), 'Foo'],
    [Foo, 'Function'],
    ['字符串', 'String'],
    [NaN, 'Number'],
    [undefined, 'Undefined'],
    [null, 'Null'],
    [Infinity, 'Number'],
    [{name: 'object'}, 'Object'],
    [new Date(), 'Date'],
    [new Map(), 'Map'],
    [new Set(), 'Set'],
  ])(
    'getType(%p, %s)',
    (x, expected) => {
      expect(getType(x)).toBe(expected);
    },
  );
});