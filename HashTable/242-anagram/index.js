/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let res = {};
    
    for (let i=0; i< s.length; i++) {
        if (!res[s[i]]) {
            res[s[i]] = 1;            
        } else {
            res[s[i]] += 1;
        }
    }
    for (let i=0; i< t.length; i++) {
        if (res[t[i]]) {
            res[t[i]] -=1;
        } else {
            return false;
        }
    }
    for (let property in res) {
        if (res[property] > 0) {
            return false;
        }
    }
    return true;
};