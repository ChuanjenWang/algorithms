const fibonacci = require('./fibonacci');

test('fibonacci function exist', () => {
    expect(fibonacci).toBeDefined();
});

test('Scenario f(0)', () => {
    expect(fibonacci(0)).toEqual(0);
});

test('Scenario f(1)', () => {
    expect(fibonacci(1)).toEqual(1);
});

test('Scenario f(8)', () => {
    expect(fibonacci(8)).toEqual(21);
});

test('Scenario f(43)', () => {
    expect(fibonacci(43)).toEqual(433494437);
});