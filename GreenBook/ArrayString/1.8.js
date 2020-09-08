/**
 * setZero
 * 
 */

// Time O(n^2), Space O(n) 
function setZero(matrix) {
    let row = [];
    let col = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row.push(i);
                col.push(j);
            }      
        }
    }

    for (let i = 0; i < row.length; i++) {
        setRowToZero(matrix, row[i]);
    }

    for (let j = 0; j < col.length; j++) {
        setColToZero(matrix, col[j]);
    }

    return matrix;
}

function setRowToZero(matrix, row) {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
}

function setColToZero(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
}

let matrix = [
    [1,2,3,4],
    [1,2,0,4],
    [1,2,3,4],
    [1,2,3,4],
];

const res = setZero(matrix);
console.log(res);