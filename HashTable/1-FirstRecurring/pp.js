//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

/**
 * Time:  O(n)
 * Space: O(n)
 */
function firstRecurringCharacter(input) {
    if (!input || !input.length) return undefined; 
    let hash = new Map();

    for (let i = 0; i < input.length; i++) {
        if (!hash.has(input[i])) {
            hash.set(arr[i], 1);
        } else {
            return input[i];
        }
    }

    return undefined;
}

//let arr = [2,5,1,2,3,5,1,2,4];
let arr = [2,1,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(arr));