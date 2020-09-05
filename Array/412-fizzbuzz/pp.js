/**
 * n = 15,
 * Return:
 * [
 *     "1",
 *     "2",
 *     "Fizz",
 *     "4",
 *     "Buzz",
 *     "Fizz",
 *     "7",
 *     "8",
 *     "Fizz",
 *     "Buzz",
 *     "11",
 *     "Fizz",
 *     "13",
 *     "14",
 *     "FizzBuzz"
 * ]
 */

function fizzBuzz(n) {
    if (n < 0) return [];
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            res.push('FizzBuzz');
        } else if (i % 5 == 0) {
            res.push('Buzz');
        } else if (i % 3 == 0) {
            res.push('Fizz');
        } else {
            res.push(i.toString());
        }
    }

    return res;
}

let n = 15;
console.log(fizzBuzz(n));