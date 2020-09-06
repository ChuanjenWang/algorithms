/**
 * --- Directions
 * Given a string, return the character that is most
 * commonly used in the string.
 * --- Examples
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    if (!str) return null;

    let hash = new Map();
    let arr = str.split('');
    let max = 0;
    let res = '';
    let cur = '';

    for (let i = 0; i < arr.length; i++) {
        if (!hash.has(arr[i])) {
            hash.set(arr[i], 1);
        } else {
            cur = hash.get(arr[i]);
            hash.set(arr[i], cur + 1);
            max = Math.max(max, cur + 1);
            
            if (max == cur + 1) {
                res = arr[i];
            }
        }
    }

    return res;
}

const c = maxChar('abcccccccd');
//const c = maxChar('apple 1231111');
console.log(c);