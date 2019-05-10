/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
var rotate2 = function(nums, k) {
    let ro = k % nums.length;
    let part = nums.slice(nums.length - ro);
    
    nums.splice(0, 0, ...part);
    nums.splice(nums.length - ro, ro);
        
    return nums;
};

var rotate = function(nums, k) {
    let ro = k % nums.length;
    
    while (ro > 0) {
        let temp = nums.pop();
        nums.unshift(temp);
        ro--;
    }
    return nums;
};

const a = rotate2([1,2,3,4,5,6,7], 3);

console.log(a);