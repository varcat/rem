const {curry} = require('../src/index.js');

describe('curry 函数测试:', () => {
  test('', () => {
    const add = curry((x, y) => x + y);
    expect(add(1, 2)).toBe(3);
    expect(add(1)(2)).toBe(3);
  });
});