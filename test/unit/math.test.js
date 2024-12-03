const sum = (a, b) => a + b;

test('sums two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
});
