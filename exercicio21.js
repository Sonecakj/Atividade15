let matriz = [];
let soma = 0;

for (let linha = 0; linha < 4; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 4; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Digite o valor da [${linha}][${coluna}]`));
    }
}


for (let contador = 0; contador < 4; contador++) {
    soma += matriz[contador][1];
}

console.log("Matriz completa:", matriz);
console.log(`A soma dos elementos da segunda coluna é: ${soma}`);