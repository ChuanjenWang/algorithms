/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('');
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        while (!isVowels(arr[start]) && start < end) {
            start++;
        }
        while (!isVowels(arr[end]) && end > start) {
            end--;
        }
        
        if(isVowels(arr[start]) && isVowels(arr[end])) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;    
        }
    }
    
    return arr.join('');
};

function isVowels(str) {
    if (str.match(/[aeiou]/gi)) return true;
    return false;
}

function swap(arr, a, b) {
    let arrT = arr.split('');
    const temp = arrT[a];
    arrT[a] = arrT[b];
    arrT[b] = temp;
    //console.log(arrT.join(''));
    return arrT.join('');
}