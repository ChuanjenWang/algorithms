/**
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */

 // time O(n^2)
 function maxSubArray(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(max, sum);    
        }
        sum = 0;
    }
    return max;
 }

 function maxSubArray2(arr) {
     let max = Number.MIN_SAFE_INTEGER;
     let sum = 0;

     for (let i = 0; i < arr.length; i++) {
         if (sum < 0) sum = 0;

         sum += arr[i];
         max = Math.max(sum, max);
     }
     return max;
 }

 //let arr = [-2,1,-3,4,-1,2,1,-5,4];
 let arr = [-1];
 let res = maxSubArray(arr);

 console.log(res);

