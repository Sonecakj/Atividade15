let vetor = [];


for (let contador = 0; contador < 10; contador++) {
    vetor[contador] = Number(prompt(`Digite o valor da posição ${contador + 1}:`));
}

console.log(`Vetor original: ${vetor}`);

for (let contador = 0; contador < Math.floor(vetor.length / 2); contador++) {
    let oposto = vetor.length - 1 - contador;
    

    let temp = vetor[contador];
    vetor[contador] = vetor[oposto];
    vetor[oposto] = temp;
}


console.log(`Vetor invertido: ${vetor}`);