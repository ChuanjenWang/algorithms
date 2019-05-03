/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hash = {};
    let happy = getNumbers(n);
    //console.log(getNumbers(n));
    
    while (happy > 1) {
        if(hash[happy]) {
            return false;
        } else {
            hash[happy] = 1;
        }
        happy = getNumbers(happy);
    }
    
    return true;
};
    
    
function getNumbers(n) {
    let num = n;
    let res = [];
    
    while(num >= 1) {
        let temp = num % 10;
        num = Math.floor(num / 10);
        res.push(temp ** 2);
    }
    let newNum = res.reduce((sum, item) => sum + item);
    
    return newNum;
}