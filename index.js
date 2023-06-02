const inputMatrix = [];
for (let i = 0; i < inputs.length; i += 4){
    inputMatrix.push(inputs.slice(i, i+4));
}

const matrix = Array(3).fill(Array(4).fill(Fraction(0)));

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 4; j++){
        const currentInput = inputMatrix[i][j];
        currentInput.addEventListener('input', ()=>{
            let value = Fraction(0);
            if (currentInput.value !== ''){
                value = Fraction(currentInput.value);
            }
            matrix[i][j] = value;
            console.log(matrix);
        })
    }
}

console.log(matrix);