/**
 * rotate array
 * 
 * for i = 0 to n
 *  temp = top[i];
 *  top[i] = left[i];
 *  left[i] = buttom[i];
 *  buttom[i] = rigjt[i];
 *  right[i] = temp;
 */


function rotate(matrix) {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;
    for (let layer = 0; layer < n / 2; layer++) {
        let first = layer;
        let last = n - 1 - layer;
        for (let i = first; i < last; i++) {
            let offset = i - first;
            let top = matrix[first][i];

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // buttom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> buttom
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top;
        }
    }
    console.log(matrix);

    return true;
}


let matrix = [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]];
const res = rotate(matrix);

console.log(res);

/**
 * [1, 2, 3, 4]
 * [1, 2, 3, 4]
 * [1, 2, 3, 4]
 * [1, 2, 3, 4]
 */
/**
 * [1, 1, 1, 1]
 * [2, 2, 2, 2]
 * [3, 3, 3, 3]
 * [4, 4, 4, 4]
 */