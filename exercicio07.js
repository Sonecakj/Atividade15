let base = Number(prompt("Digite a base(número real):"));
let expoente = Number(prompt("Digite o expoente(número inteiro positivo):"));
let resultado = 1;

for (let contador = 0; contador < expoente; contador++) {
    resultado *= base;
}

console.log(`${base} elevado a ${expoente} é: ${resultado}`);