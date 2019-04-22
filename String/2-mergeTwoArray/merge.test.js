const merge = require('./merge');

test('Merge function exist', () => {
    expect(merge).toBeDefined();
});


test('Merge two array', () => {
    expect(merge([2,4,6,8], [1,3,5,7])).toEqual([1,2,3,4,5,6,7,8]);
});

test('First array is empty', () => {
    expect(merge([], [1,3,5,7])).toEqual([1,3,5,7]);
});

test('Second array is empty', () => {
    expect(merge([1,3,5,7],[])).toEqual([1,3,5,7]);
});

