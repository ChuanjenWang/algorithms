// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
    let hash = {};
    let max = 0;
    let maxC = '';

    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) {
            hash[str[i]] = 1;
        } else {
            hash[str[i]] += 1;
            if (hash[str[i]] > max) {
                max = hash[str[i]];
                maxC = str[i];
            }
        }
    }
    return maxC;
}

const c = maxChar('apple 1231111');
console.log(c);