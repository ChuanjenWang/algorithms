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

var combinationSum = function(candidates, target) {
  let array = candidates.sort();
  let temp = [];
  let p = 0;
  
  getCombin(array, target, temp, p);

  return res;
};

function getCombin(arr, target, temp, p) {
    if (target < 0) return;
    if (target === 0) {
        //console.log('temp: ' + temp);
        res.push([...temp]);
        //res.push(1);
        return;
    }
    
    for (let i = p; i < arr.length; i++) {
        temp.push(arr[i]);
        getCombin(arr, target - arr[i], temp, i);
        temp.pop();
    }
}

//candidates = [2,3,6,7], target = 7
//candidates = [2,3,5], target = 8
const a = combinationSum([2,3,5], 8);

console.log(a);
