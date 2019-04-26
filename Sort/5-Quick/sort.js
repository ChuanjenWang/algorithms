
function sort(arr, start = 0, end = arr.length -1) {
    if (start > end) return;
    const pivot = Math.floor((end - start)/ 2) + start;
    let left = start;
    let right = end;

    while (left <= right) {
        while (arr[left] < arr[pivot]) {
            left++;
        }
        while (arr[right] > arr[pivot]) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        } 
    }
    
    //handle right
    sort(arr, left, end);
    //handle left
    sort(arr, start, right);

    return arr;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const a = sort([3,6,8,4,3,1,3,7]);
console.log(a);

