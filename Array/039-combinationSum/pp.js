/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/**
 * Input: candidates = [2,3,6,7], target = 7,
   A solution set is:
  [
    [7],
    [2,2,3]
  ]
 */

let res = [];

function getCombin(i, target, arr, temp) {
    if (target < 0) return;
    if (target == 0) {
        res.push([...temp]);
        return;
    }

    for (let p = i; p < arr.length; p++) {
        temp.push(arr[p]);
        getCombin(p, target - arr[p], arr, temp);
        temp.pop();
    }
} 

function main() {
    let arr = [2,3,6,7];
    let target = 7;
    let temp = [];
    let p = 0;

    getCombin(p, target, arr, temp);
}

main();
console.log(res);

