//Get all necessary elements
const rowEchelonValues = Array.from(document.querySelectorAll('.row-echelon-value'));
const solutionContainer = document.querySelector('#solution-container');
const unSolvableMessage = document.querySelector('#unsolvable-message');
const xLabel = document.querySelector('#x');
const yLabel = document.querySelector('#y');
const zLabel = document.querySelector('#z');
const modeButton = document.querySelector('#color-mode');
const body = document.querySelector('body');

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
            updateResult();
        })
    }
}

function updateResult() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            outputMatrix[i][j].textContent = rowEchelon[i][j].toString();
        }
    }
    if (isSolvable(rowEchelon)){
        let answers = solve(rowEchelon);
        xLabel.textContent = `x = ${answers[0]}`;
        yLabel.textContent = `y = ${answers[1]}`;
        zLabel.textContent = `z = ${answers[2]}`;
        solutionContainer.style.display = 'flex';
        unSolvableMessage.style.display = 'none';
    }
    else{
        solutionContainer.style.display = 'none';
        unSolvableMessage.style.display = 'block';
    }
}

let isDarkMode = true;
modeButton.addEventListener('click', ()=>{
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    modeButton.classList.toggle('dark-mode');
    inputs.forEach((input)=>{
        input.classList.toggle('dark-mode');
    });
    if (isDarkMode){
        modeButton.textContent = 'Light Mode';
    } else{
        modeButton.textContent = 'Dark Mode';
    }
})