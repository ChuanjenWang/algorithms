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
function firstRecurringCharacter1(input) {
    if(!input || !input.length) return undefined;
    let map = {};

    for(let i = 0; i< input.length; i ++) {
        if (!map[input[i]]) {
            map[input[i]] = 1;
        } else {
            return input[i];
        }
    }

    return undefined;
}

/**
 * Use ES6 Map()
 */
function firstRecurringCharacter2(input) {
    if(!input || !input.length) return undefined;
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (!map.has(input[i])) {
            map.set(input[i], 1);
        } else {
            return input[i];
        }
    }

    return undefined;
} 

module.exports = firstRecurringCharacter2;
