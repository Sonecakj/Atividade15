const equipes = 4;
const trimestres = 3;
let notas = [];
let mediaEquipes = [];


for (let linha = 0; linha < equipes; linha++) {
    notas[linha] = [];
    let soma = 0;
    
    for (let coluna = 0; coluna < trimestres; coluna++) {
        let nota = Number(prompt(`Digite a nota da Equipe ${linha + 1} no Trimestre ${coluna + 1}:`));
        notas[linha][coluna] = nota;
        soma += nota;
    }
    
    mediaEquipes[linha] = soma / trimestres;
}

for (let contador = 0; contador < mediaEquipes.length; contador++) {
    console.log(`Equipe ${contador + 1}: Média Final = ${mediaEquipes[contador].toFixed(2)}`);
}