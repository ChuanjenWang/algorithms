/**
 * Reverse a String
 * ex: Hi! I'm Spencer Wang
 * output: Wang Spencer I'm Hi!
 */

/**
 * Use built-in function
 * Time:  O(1)
 * Spece: O(1)
 */
function reverseString1(str) {
   return str.split('').reverse().join('');
}

/**
 * Loop once
 * Time: O(n)
 * Space: O(n)
 */
function reverseString2(str) {
    let res = [];
    str.split('').forEach((item) => {
       res.unshift(item);
    })
    
    return res.join('');
}

/**
 * USE Reduce
 * Time:  O(n)
 * Space: O(1)
 */
function reverseString3(str) {
   return str.split('').reduce((cum, cur) => cur + cum);
}

/**
 * 1,3,4,5,6   5/2 = 2
 * 
 */
function reverseString4(str) {
   let i = 0;
   let res = str.split('');
   while (i < res.length / 2) {
       swap(i, res.length - 1 - i, res);
       i++;
   }
   return res.join('');
}

function swap (i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


module.exports = reverseString4;


//---Execute-------------------
let tempS = 'abcdes';
let res = reverseString(tempS);

console.log(res);
