
function mergeSort(arr) {
    if(arr.length === 1) return arr;

    //1,2,3,4,5
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
    if (!arr1.length && !arr2.length) {
        return [];
    }
    const res = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] <= arr2[0]) {
            res.push(arr1.shift());
        } else {
            res.push(arr2.shift());
        }
        console.log(res);
    }

    return [...res, ...arr1, ...arr2];
}

const a = mergeSort([3,6,8,4,3,1,3,7]);
console.log(a);