
// 3,6,8,4,3,1,3,7
function sort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i, 1)[0]);
            break;    
        } else {
            for (let j = 1; j < i; j++) {
                if (arr[j] >= arr[j - 1] && arr[j] < arr[j + 1]) {
                    arr.splice(j, 0, arr[i]);
                    break;
                }
            }
        }
        
    }
    return arr;
}

function sort2(arr) {
    let res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < res[0]) {
            res.unshift(arr[i]);
        } else if(arr[i] > res[res.length - 1]) {
            res.push(arr[i]);
        } else {
            for(let j = 0; j < res.length; j++) {

                if(arr[i] >= res[j] && arr[i] < res[j+1]) {    
                    //console.log('in');
                    res.splice(j + 1, 0, arr[i]);
                    break;
                }
            }
        }
        console.log(arr[i]);
        console.log(res);
    }

    return res;
}


const a = sort2([3,6,8,4,3,1,3,7]);
console.log(a);


//3,6,5,8,2,9,4

//3,6 