let numero = Number(prompt("Digite um número inteiro positivo:"));
let contador = 0;
let copia = numero;

while (copia > 0) {
    copia = (copia / 10) | 0; 
    contador++;
}

console.log(`O número ${numero} possui ${contador} dígito(s).`);