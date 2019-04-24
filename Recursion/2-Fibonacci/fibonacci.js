/**
 * Time:  O(2^n)) 
 * Space: O(1)
 */
function fibonacci(n) {
    if (n <= 1) return n;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Use Loop to implement fibonacci
 * Time:  O(n)
 * Space: O(n)
 */
function fibIterial(n) {
    let arr = [0, 1];
    let counter = 2;

    while(counter <= n) {
        arr.push(arr[counter-1] + arr[counter-2]);
        counter++;
    }
    
    return arr[n];
}

/**
 * Fibonacci with cache
 * Time:   O(log(n))
 * Speace: O(1)
 */
function slowFib(n) {
    if (n <= 1) return n;

    return mFib(n - 1) + mFib(n - 2);
}

const mFib = memorizer(slowFib);
/**
 * Hight Order Function
 */
function memorizer (fn) {
    let cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        } else {
            const tmp = fn.apply(this, args);
            cache[args] = tmp;

            return tmp;
        }
    }
}

//console.log(memorizer(slowFib(43)));

module.exports = memorizer(slowFib);