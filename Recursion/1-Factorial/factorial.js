/**
 * Time:  O(n)
 * Space: O(1)
 */
function factorial(n) {
    if(n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(10));

module.exports = factorial;