let inicio = Number(prompt("Digite o inicio do intervalo"));
let fim = Number(prompt("Digite o fim do intervalo"));
let soma = 0;

for (let contador = inicio; contador <= fim; contador++){
    soma += contador;

    if((contador % 3 === 0) || (contador % 5 === 0)){
        soma += contador;
    }
}
console.log(`A soma dos múltiplos de 3 e 5 no intervalo de ${inicio} a ${fim} é ${soma}`);