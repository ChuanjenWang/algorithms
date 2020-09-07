/**
 * Palindrome Permutation
 * 
 * input:  Tact Coa
 * output: True ("taco cat", "atco ctas") 
 */

// O(n)
function isPermutationOfPalindorme(phrase) {
   let char_set = charArrayHelper(phrase);
   let odd_count = 0;

   for (let i = 0; i < char_set.length; i++) {
       if (char_set[i]) {
           if (char_set[i] > 1 && char_set[i] % 2 === 1) {
               return false;
           }
           if (char_set[i] === 1) {
            odd_count++;
           }
       }
   }
   if (odd_count > 1) {
       return false;
   }

   return true;
}

function charArrayHelper(phrase) {
    let char_set = new Array(128);
    let arr = phrase.toLowerCase().split('');
 
    for (let i = 0; i < arr.length; i++) {
        let val = char_set[arr[i].charCodeAt(0)];
        if (!val) {
         if (arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122) {
             char_set[arr[i].charCodeAt(0)] = 1;
         } else {
             char_set[arr[i].charCodeAt(0)] = -1;
         }
        } else {
         char_set[arr[i].charCodeAt(0)] = val + 1;
        }
    }
    return char_set;
}

let str = "Tact Coao";
let res = isPermutationOfPalindorme(str);

console.log(res);

 
