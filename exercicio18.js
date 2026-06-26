let vetorA = [];
let vetorB = [];
let vetorC = [];


for (let contador = 0; contador < 5; contador++) {
    vetorA[contador] = Number(prompt(`Vetor A: Digite o ${contador + 1}º número`));
}


for (let contador = 0; contador < 5; contador++) {
    vetorB[contador] = Number(prompt(`Vetor B: Digite o ${contador + 1}º número`));
}

for (let contador = 0; contador < 5; contador++) {
    vetorC.push(vetorA[contador]);
    vetorC.push(vetorB[contador]);
}


console.log(`Vetor A: ${vetorA}`);
console.log(`Vetor B: ${vetorB}`);
console.log(`Vetor C (Intercalado): ${vetorC}`);