const { Fraction } = require('mathjs');

Fraction.prototype.toString = function () {
    if (this.d === 1){
        return `${this.n * this.s}`;
    }
    return `${this.n * this.s}/${this.d}`;
};

let matrix = [
    [Fraction('0'), Fraction('2'), Fraction('2'), Fraction('5')],
    [Fraction('2'), Fraction('1'), Fraction('3'), Fraction('2')],
    [Fraction('0'), Fraction('0'), Fraction('1'), Fraction('4')]
]

function printMatrix(matrix){
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            process.stdout.write(matrix[i][j].toString());
        }
        console.log();
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
