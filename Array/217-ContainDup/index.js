/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if(hash.has(num[i])) {
            return true;
        } else {
            hash.set(num[i], 1);
        }
    }
    return false;
};