/**
 * input: "Mr John Smith    "
 * output:"Mr%20John%20Smith"
 */

function replaceSpace(str, len) {
    let spaceCount = 0;

    for (let i = 0; i < len; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }
    let index = len + spaceCount * 2 - 1;
    let arr = str.split('');

    for (let i = len -1; i >=0; i--) {
        if (arr[i] === ' ') {
            arr[index] = '0';
            arr[index - 1] = '2';
            arr[index - 2] = '%';
            index = index - 3;
        } else {
            arr[index] = arr[i];
            index--;
        }
    }    

    return arr.join('');
}


let str = "Mr John Smith    ";
let len = 13;
let res = replaceSpace(str, len);

console.log(res);