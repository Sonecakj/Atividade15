function numcinquenta(lista){
    let contador = 0;

    for(let numero of lista){
        if(numero > 50){
            contador++;
        }
}
    return contador;
}

let vetor = [];

for(let contador = 0; contador < 7; contador++){
    let num = Number(prompt(`Digite o ${contador + 1}º número:`));
    vetor.push(num);
}

let resultado = numcinquenta(vetor);

console.log(`O vetor original é: [${vetor.join(', ')}]`);
console.log(`Quantidade de números maiores que 50: ${resultado}`);