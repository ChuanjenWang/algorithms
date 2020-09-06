/**
 * ASCII 
 *
 * https://theasciicode.com.ar/
 * str.charCodeAt(i)
 */

function isUniqueChars(str) {
    if (str.length > 128) return false;

    let char_set = new Array(128);
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i);
        if (char_set[val]) {
            return false;
        } else {
            char_set[val] = true;
        }
    }

    return true;
}

str = 'abcdefghijk';
res = isUniqueChars(str);
console.log(res);