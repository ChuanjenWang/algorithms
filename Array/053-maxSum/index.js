/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) sum = 0;

        sum += nums[0];    
        max = Math.max(max, sum);   
    }
    return max;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    let max = 0;
    const reducer = (accum, curr) => accum + curr;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++ ) {
            //console.log(`i ${i}, j ${j}`);
            let sum = nums.slice(i, j).reduce(reducer);
            if(i === 0 && j === 1 ) max = sum;
            
            if (sum > max) {
                max = sum;
            }
        }
    }
    return max;
};

const a = maxSubArray2([-1]);

console.log(a);

