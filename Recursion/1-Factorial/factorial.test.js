const factorial = require('./factorial');

test('factorial function exist!', ()=> {
    expect(factorial).toBeDefined();
});

test('Scenario 1!', () => {
    expect(factorial(1)).toEqual(1);
});

test('Scenario 5!', () => {
    expect(factorial(5)).toEqual(120);
});

test('Scenario 10!', () => {
    expect(factorial(10)).toEqual(3628800);
});