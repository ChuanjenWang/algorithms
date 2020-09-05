/**
 * 2020/08/30 practice 
 * input  "hello"
 * output "holle"
 */

function reverseVowels(str) {
    let i = 0;
    let j = str.length - 1;
    let res = str.split('');

    while (i < j) {
        while (!isVowels(str[i]) && i < j) {
            i++;
        }
        while (!isVowels(str[j]) && i < j) {
            j--;
        }

        if (isVowels(str[i]) && isVowels(str[j])) {
            swap(i, j, res);
            i++;
            j--;
        }
    }

    return res.join('');
}

function isVowels(s) {
    let vo = 'aeiou';

    if (vo.indexOf(s) > -1) return true;

    return false;
}

function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

let a = 'leetcode';
let res = reverseVowels(a);

console.log(res);