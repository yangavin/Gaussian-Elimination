//Get all necessary elements
const rowEchelonValues = Array.from(document.querySelectorAll('.row-echelon-value'));

const inputMatrix = [];
for (let i = 0; i < inputs.length; i += 4) {
    inputMatrix.push(inputs.slice(i, i + 4));
}

const outputMatrix = [];
for (let i = 0; i < rowEchelonValues.length; i += 4) {
    outputMatrix.push(rowEchelonValues.slice(i, i + 4));
}

const matrix = [
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)],
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)],
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)]
];

let rowEchelon;
let isSolved = false;

//Loop through all inputs and add corresponding event listeners
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        let currentInput = inputMatrix[i][j];
        currentInput.addEventListener('input', () => {
            //Delete all invalid characters
            currentInput.value = currentInput.value.replace(/[^0-9/.-]/g, '');
            //Default value of 0
            let value = Fraction(0);
            if (currentInput.value !== '') {
                try {
                    value = Fraction(currentInput.value);
                } catch { }
            }
            matrix[i][j] = value;
            rowEchelon = toRowEchelon(matrix);
            updateRowEchelon();
            //Debugging
            printMatrix(matrix);
            console.log(' ');
        })
    }
}

function updateRowEchelon() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            outputMatrix[i][j].textContent = rowEchelon[i][j].toString();
        }
    }
}
