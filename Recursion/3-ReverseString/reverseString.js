/**
 * 
 */
function reverseString(str) {
    if(!str) return '';
    
    return str.slice(str.length-1) + reverseString(str.slice(0, str.length-1));
}

console.log(reverseString('abcde'));