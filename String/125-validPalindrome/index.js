/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let clearStr = s.replace(/[^\w]/g, '').toLowerCase();
    let center = clearStr.length / 2;
    let i = 0;
    
    while (i < center) {
        if (clearStr[i] !== clearStr[clearStr.length - 1 - i]) {
            return false;
        }
        i++;
    }
    
    return true;
};
