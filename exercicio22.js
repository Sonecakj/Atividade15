let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];


for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Digite o valor para a posição [${linha}][${coluna}]:`));
    }
}

let fator = Number(prompt("Digite o número para multiplicar a matriz:"));


for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] *= fator; 
    }
}

console.log(`Matriz após multiplicar por ${fator}:`);
console.table(matriz);