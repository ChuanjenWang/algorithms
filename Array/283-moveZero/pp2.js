


function moveZeroes(arr) {
    if (!arr) return [];
    let i = 0;
    arr.push(-1);

    while (i < arr.length){
        if (arr[i] == -1) break;
        if (arr[i] == 0) {
            arr.splice(i, 1);
            arr.push(0);
        } else {
            i++;
        }
    }

    arr.splice(i, 1);
    return arr;
}

function move2(arr) {
    if (!arr) return [];
    let i = 0;
    let j = 0;

    while (i < arr.length) {
        if (arr[i] !== 0) {
            arr[j] = arr[i];
            j++
        } 
        i++;
    }
    while (j < arr.length) {
        arr[j] = 0;
        j++;
    }
    return arr;
}


//let arr = [0,1,0,3,12];
let arr = [0,0,0,1];
console.log(move2(arr));