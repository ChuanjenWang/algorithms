

function chunk(arr, n) {
    let len = arr.length;
    let res = [];

    while (len >= n) {
        let subArr = [];
        let i = 0;
        while (i < n) {
            subArr.push(arr.shift());
            i++;
        }
        res.push(subArr);
        len -= n;
    }

    if (arr.length > 0) {
        res.push(arr);
    }
    
    return res;
}

function chunk2(arr, n) {
    let res = [];
    let i = 0;

    while (i < arr.length) {
        res.push(arr.slice(i, i + n));
        i += n;
    }
    
    return res;
}

function chunk3(arr, n) {
    let len = arr.length;
    let i = 1;
    let sub = [];
    let res = [];

    while (i <= len) {
        if (i % n == 0) {
            sub.push(arr[i - 1]);
            res.push(sub);
            sub = [];
        } else {
            sub.push(arr[i - 1]);
        }
        i++;
    }
    res.push(sub);

    return res;
}

const arr = [1,2,3,4,5,6,7];
const a = chunk3(arr, 2);

console.log(a);
