let matriz = [];
let valor = -Infinity;
let lMax = 0;
let cMax = 0;

for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = Number(prompt(`Digite o valor para a posição [${linha}][${coluna}]:`));
    }
}


for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        if (matriz[linha][coluna] > valor) {
            valor = matriz[linha][coluna];
            lMax = linha;
            cMax = coluna;
        }
    }
}

console.log(`O maior valor encontrado foi ${valor}.`);
console.log(`Ele está na posição [${lMax}] [${cMax}]`);