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

let ss = 'a  b  c # b @ A';
let ss2 = 'abccba';

function isPalindromePP(s) {
    let i = 0;
    let newS = clearString(s);
    let n = newS.length / 2;

    while (i < n) {
        if (newS[i].toLowerCase() !== newS[newS.length - i - 1].toLowerCase()) {
            return false;
        }
        i++;
    }
    return true;
}

function clearString(s) {
    let fix = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = [];
    let arr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
        if (fix.indexOf(arr[i]) > -1) {
            res.push(arr[i]);
        }
    }
    
    return res.join('');
}

let res = isPalindromePP(ss);

console.log(res);