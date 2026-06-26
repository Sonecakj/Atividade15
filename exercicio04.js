let valor1 = Number(prompt("Digite o valor do primeiro lado do triangulo:"));
let valor2 = Number(prompt("Digite o valor do segundo lado do triangulo:"));
let valor3 = Number(prompt("Digite o valor do terceiro lado do triangulo:"));

if(valor1 === valor2 && valor2 === valor3) {
    console.log("TODOS OS LADOS IGUAIS: O TRIÂNGULO É EQUILÁTERO");
}
else if(valor1 === valor2 || valor2 === valor3 || valor1 === valor3) {
    console.log("DOIS LADOS IGUAIS: O TRIÂNGULO É ISÓSCELES");
}
else {
    console.log("TODOS OS LADOS DIFERENTES: O TRIÂNGULO É ESCALENO");
}