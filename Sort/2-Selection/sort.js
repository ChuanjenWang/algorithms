
function sort(arr) {
    let min = 0;
    let minInedex = 0;

    for (let i = 0; i < arr.length; i++) {
        min = arr[i];
        minInedex = i;
        for (let j = i; j< arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minInedex = j;
            }
        }
        swap(arr, i, minInedex);
    }

    return arr;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const a = sort([2,5,9,3,1,6,4]);

console.log(a);