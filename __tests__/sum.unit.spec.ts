function sum(a: number, b: number) {
  return a + b;
}

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 to equal 3 - fail', () => {
    expect(sum(1, 3)).toBe(3);
  });
});
