/**
 * input  aabcccccaaa
 * output a2b1c5a3
 */

function compress(str) {
    let res = [];
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        count++;
        if (i + 1 >= str.length || str[i] !== str[i + 1]) {
            res.push(str[i]);
            res.push(count.toString());
            count = 0;
        }
    }

    return res.join('');
}

let str = 'aabcccccaaa';
const res = compress(str);

console.log(res);