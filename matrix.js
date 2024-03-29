const { Fraction } = math;

Fraction.prototype.toString = function () {
    if (this.d === 1){
        return `${this.n * this.s}`;
    }
    return `${this.n * this.s}/${this.d}`;
};

function printMatrix(matrix){
    for (let i = 0; i < 3; i++) {
        console.log('[', matrix[i][0].toString(), matrix[i][1].toString(), matrix[i][2].toString(), matrix[i][3].toString(), ']');
    }
}

function rowSwap(matrix, row1Index, row2Index){
    let row = matrix[row1Index];
    matrix[row1Index] = matrix[row2Index];
    matrix[row2Index] = row;
}

function sort(matrix) {
    for (let i = 0; i < 3; i++) {
        if (!matrix[i][0].equals(0)) {
            rowSwap(matrix, 0, i);
            break;
        }
    }
    for (let i = 1; i < 3; i++) {
        if (!matrix[i][1].equals(0)) {
            rowSwap(matrix, 1, i);
            break;
        }
    }
}

function combine(multiplier, row1, row2){
    let combined = [];
    for (let i = 0; i < 4; i++) {
        combined.push((row1[i].mul(multiplier)).add(row2[i]));
    }
    return combined;
}

function toRowEchelon(matrix){
    const result = [];
    for (let i = 0; i < matrix.length; i++){
        result[i] = matrix[i].slice();
    }
    sort(result);
    //First Step
    if (!result[1][0].equals(0)){
        let multiplier = result[1][0].div(result[0][0]).mul(-1);
        result[1] = combine(multiplier, result[0], result[1]);
    }
    if (!result[2][0].equals(0)){
        let multiplier = result[2][0].div(result[0][0]).mul(-1);
        result[2] = combine(multiplier, result[0], result[2]);
    }
    sort(result);

    //Second Step
    if (!result[2][1].equals(0)){
        let multiplier = result[2][1].div(result[1][1]).mul(-1);
        result[2] = combine(multiplier, result[1], result[2]);
    }
    return result;
}

function solve(matrix){
    let z = matrix[2][3].div(matrix[2][2]);
    let y = (matrix[1][3].sub(matrix[1][2].mul(z))).div(matrix[1][1]);
    let x = (matrix[0][3].sub(matrix[0][1].mul(y)).sub(matrix[0][2].mul(z))).div(matrix[0][0]);
    return [x, y, z];
}

function isSolvable(matrix){
    let solvable = true;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i].equals(0)){
            solvable = false;
            break;
        }
    }
    return solvable;
}