const reverse = require('./reverse');

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('a b c d')).toEqual('d c b a');
});

test('Reverse reverses a string', () => {
    expect(reverse('  a b c d')).toEqual('d c b a  ');
});

test('Reverse reverses a string', () => {
    expect(reverse('Hi Im Spencer Wang')).toEqual('gnaW recnepS mI iH');
});