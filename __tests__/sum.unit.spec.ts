function sum(a: number, b: number) {
  return a + b;
}

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('fail', () => {
    expect(sum(1, 3)).toBe(3);
  });
});