/**
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * 
 * You must do this in-place without making a copy of the array.
 */

 // O(n)
function moveZeroes(arr) {
    let num = 0;
    let i = 0;
    arr.push(-1);

    while (i < arr.length) {
        if (arr[i] == -1) break;
        if (arr[i] === 0) {
            arr.splice(i, 1);   
            arr.push(0);
        } else {
            i++;
        }
    }
    arr.splice(i, 1);    
    return arr;
}

function moveZeroes2(arr) { 
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[j] = arr[i];
            j++;
        }
    }
    while (j < arr.length) {
        arr[j] = 0;
        j++;
    }
    return arr;
}

//let arr = [0,1,0,3,12];
let arr = [0,0,0,1];
console.log(moveZeroes2(arr));