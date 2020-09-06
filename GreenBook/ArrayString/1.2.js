/**
 * A string contains another string permutation
 * god vs dog
 */

//O(nlog(n))
function permutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if (str1 !== str2) return false;

    return true;
}

// O(n)
function permutation2(str1, str2) {
    if (str1.length !== str2.length) return false;
    let char_set = new Array(128);

    for (let i = 0; i < str1.length; i++) {
        if (!char_set[str1.charCodeAt(i)]) {
            char_set[str1.charCodeAt(i)] = 1;
        } else {
            char_set[str1.charCodeAt(i)] += 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (char_set[str1.charCodeAt(i)]) {
            char_set[str1.charCodeAt(i)] -= 1;
            if (char_set[str1.charCodeAt(i)] < 0) {
                return false;
            }
        } 
    }
    return true;
}

let a = 'dog 1 gip';
let b = 'god 1 pig';
let res = permutation2(a, b);

console.log(res);