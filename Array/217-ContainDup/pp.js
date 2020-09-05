/**
 * Input: [1,2,3,1]
 * Output: true
 */

 // tims O(n)
function containDup(arr) {
    let hash = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (hash.has(arr[i])) {
            return true;
        } else {
            hash.set(arr[i], 1);
        }
    }
    return false;
}

let arr = [1,2,3,1];
let res = containDup(arr);

console.log(res);