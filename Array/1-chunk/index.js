function chunk(array, num) {
    let res = [];
    let i = 0;
    let sub = [];

    while (i < array.length) {
        if ((i + 1) % num !== 0) {
            sub.push(array[i]);
        } else {
            sub.push(array[i]);
            res.push(sub);
            sub = [];
        }
        i++;
    }
    res.push(sub);

    return res;
}

function chunk2(array, num) {
    const res = [];
    let i = 0;

    while(i < arr.length) {
        res.push(array.slice(i, i + num)); 

        i += num;
    }
    return res;
}

const arr = [1,2,3,4,5,6,7];
const a = chunk2(arr, 2);

console.log(a);


