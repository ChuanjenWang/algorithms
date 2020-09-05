/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
var moveZeroes = function(nums) {
    let i = 0;
    let counter = 0;
    nums.push(-1);

    while (i < nums.length ) {
        if (nums[i] === -1) break;
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            counter++;
        } else {
            i++;
        }
    }
    //nums.splice(nums.length - 1 - counter, 1);
    nums.splice(i ,1);

    return nums;
};

const a = moveZeroes([0,0,0,1]);

console.log(a);
