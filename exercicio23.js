let matrizA = [
    [0, 0, 0],
    [0, 0, 0]
];


for (let linha = 0; linha < 2; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        matrizA[linha][coluna] = Number(prompt(`Digite o valor para A[${linha}][${coluna}]:`));
    }
}

let matrizB = [
    [0, 0],
    [0, 0],
    [0, 0]
];


for (let linha = 0; linha < 2; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        matrizB[coluna][linha] = matrizA[linha][coluna];
    }
}

console.log("Matriz Original (A):");
console.table(matrizA);
console.log("Matriz Transposta (B):");
console.table(matrizB);