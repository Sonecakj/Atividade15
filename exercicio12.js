function calcularIMC(peso, altura){
    let imc = peso / (altura * altura);

    if(imc < 18.5){
        return "Abaixo do peso";
    } else if(imc >= 18.5 && imc < 24.9){
        return "Peso normal";
    } else if(imc >= 25 && imc < 29.9){
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

let p = Number(prompt("Digite seu peso em kg:"));
let a = Number(prompt("Digite sua altura em metros:"));

let resultado = calcularIMC(p, a);
console.log(`Seu IMC é ${resultado}`);