function calcularMediaPonderada(n1, n2, p1, p2){
    let numeros = (n1 * p1) + (n2 * p2);
    let pesos = p1 + p2;
    return numeros / pesos;
}

let nota1 = Number(prompt("Digite a primeira nota:"));
let peso1 = Number(prompt("Digite o peso da primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let peso2 = Number(prompt("Digite o peso da segunda nota:"));

let resultado = calcularMediaPonderada(nota1, nota2, peso1, peso2);
console.log(`A média ponderada é ${resultado.toFixed(2)}`);