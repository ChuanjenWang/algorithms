
function sort(arr) {
    if (!arr.length) return;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if(arr[j+1] < arr[j]) {
                swap(arr, j+1, j);
            }
        }
    }
    return arr;
}

function swap(arr, i , j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const a = sort([3,6,8,4,3,1,3,7]);

console.log(a);