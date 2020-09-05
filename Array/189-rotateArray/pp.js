/**
 * Input: [1,2,3,4,5,6,7] and k = 3
 * Output: [5,6,7,1,2,3,4]
 */

function rotateArray(arr, k) {
    let n = k % arr.length;
    let i = 0;

    while(i < n) {
        arr.unshift(arr.pop());
        i++;
    }

    return arr;
}

function rotateArray2(arr, k) {
    let n = k % arr.length;

    let res1 = arr.slice(-n);
    let res2 = arr.slice(0, arr.length - n);

    return [...res1, ...res2];
}

let arr = [1,2,3,4,5,6,7];
let k = 3;

console.log(rotateArray2(arr, k));
