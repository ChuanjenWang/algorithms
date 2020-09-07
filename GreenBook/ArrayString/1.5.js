/**
 * One Edit
 * 
 * pale, ple   -> true
 * pales, pale -> true
 * pale, bale  -> true
 * pale, bake  -> false
 */

 // Time O(n)
 function oneEditAway(first, second) {
    if (first.length === second.length) {
        return oneEditReplace(first, second);
    } else if (first.length = second.length -1) {
        return oneEditInsert(first, second);
    } else if (second.length = first.length -1) {
        return oneEditInsert(second, first);
    }
    return false;
 }

 function oneEditReplace(first, second) {
    let diff = 0;

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            diff++;
        }
    }
    if (diff > 1) return false;
    return true;
 }

 function oneEditInsert(first, second) {
    let index1 = 0;
    let index2 = 0;
    let diff = 0;

    while (index1 < first.length && index2 < second.length) {
        if (first[index1] !== second[index2]) {
            diff++;
            index1++;
        } else {
            index1++;
            index2++;
        }
    }
    if (diff > 1) return false;
    return true;
 }

// Second solution
function oneEditAway2(first, second) {
    if (Math.abs(first.length - second.length) > 1) {
        return false;
    }
    
    let s1 = first.length > second.length ? first : second;
    let s2 = first.length > second.length ? second : first;

    let index1 = 0;
    let index2 = 0;
    let diff = 0;

    while (index1 < s1.length && index2 < s2.length) {
        if (s1[index1] !== s2[index2]) {
            diff++;
            if (s1.length == s2.length) {
                index1++;
                index2++;
            } else {
                index1++;
            }
        } else {
            index1++;
            index2++;
        }
    }
    if (diff > 1) return false;

    return true;
}


let first = 'ale';
let second = 'pale';

const res = oneEditAway2(first, second);

console.log(res);