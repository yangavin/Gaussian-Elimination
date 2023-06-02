const inputMatrix = [];
for (let i = 0; i < inputs.length; i += 4){
    inputMatrix.push(inputs.slice(i, i+4));
}

const matrix = [
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)],
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)],
    [Fraction(0), Fraction(0), Fraction(0), Fraction(0)]
];

let rowEchelon;

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 4; j++){
        let currentInput = inputMatrix[i][j];
        currentInput.addEventListener('input', ()=>{
            currentInput.value = currentInput.value.replace(/[^0-9/.-]/g, '');
            let value = Fraction(0);
            if (currentInput.value !== ''){
                try{
                    value = Fraction(currentInput.value);
                }catch{}
            }
            matrix[i][j] = value;
            rowEchelon = toRowEchelon(matrix);
            printMatrix(matrix);
            console.log(' ');
        })
    }
}

