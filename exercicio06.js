let numero = Number(prompt("Digite um número"));

if(numero % 2 === 0){
    let numTriplo = numero * 3;
    console.log(`${numero} é PAR. O triplo é ${numTriplo}.`);
}
else if(numero % 2 !== 0){
    let numQuadrado = numero * numero;
    console.log(`${numero} é ÍMPAR. O quadrado é ${numQuadrado}.`);
}