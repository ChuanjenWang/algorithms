/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > ((2 ** 31) -1) || x < (2 ** 31) * -1) return 0;
    let res = 0;
    let num = Math.abs(x);
    
    
    while (num > 0) {
        if (num < 10) {
            res += num;
            break;
        }
        let temp = num % 10;
        res += temp;
        res *= 10;
        num = Math.floor(num / 10);
        //console.log(`res: ${res}, num: ${num}`);
    }
    if(res > ((2 ** 31) -1) || res < (2 ** 31) * -1) return 0;
    if (x < 0) res *= -1;
    
    return res;
};