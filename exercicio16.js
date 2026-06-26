let numero = [];
let par = [];
let impar = [];

for(let contador = 0; contador < 10; contador++){
    let num = Number(prompt(`Digite o ${contador + 1}º valor inteiro:`));
    numero.push(num);
}

for(let num of numero){
    if(num % 2 === 0){
        par.push(num);
    } else {
        impar.push(num);
    }
}
console.log(`Os vetores iniciais são: ${numero}`);
console.log(`Os números pares são: ${par}`);
console.log(`Os números ímpares são: ${impar}`);