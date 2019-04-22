/**
 * Merge two sort array
 * [2,4,6,7], [1,3,5] => [1,2,3,4,5]
 * 
 */

 /**
  * Time:  O(n)
  * Space: O(n)
  */
 function merge1(arr1, arr2) {
    if(!arr1 && !arr2) return [];
    let newArray = [];

    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            newArray.push(arr1[0]);
            arr1.shift();
        } else {
            newArray.push(arr2[0]);
            arr2.shift();
        }
    }

    return [...newArray, ...arr1, ...arr2];
 }

 module.exports = merge1;