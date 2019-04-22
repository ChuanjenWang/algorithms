const recurring = require('./index');

test('First Recurring Charactor exist', () => {
    expect(recurring).toBeDefined();
});

test('Recurring input check', () => {
    expect(recurring()).toEqual(undefined);
    expect(recurring([])).toEqual(undefined);
});

test('Recurring scenario 1', () => {
    expect(recurring([2,5,1,2,3,5,1,2,4])).toEqual(2);
});

test('Recurring scenario 2', () => {
    expect(recurring([2,1,1,2,3,5,1,2,4])).toEqual(1);
});

