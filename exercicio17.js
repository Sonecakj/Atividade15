let inventario = [101, 205, 309, 412, 550, 623, 711, 890]; 
console.log(`Inventário inicial: ${inventario}`);

let remover = Number(prompt("Digite o código do produto que deseja remover"));


let encontrado = false;


for (let contador = 0; contador < inventario.length; contador++) {
    if (inventario[contador] === remover) {
        inventario[contador] = 0;
        encontrado = true;
        console.log(`Sucesso: Produto ${remover} removido (posição ${contador}).`);
        break;
    }
}

// 5. Verificação final pós-busca
if (encontrado === false) {
    console.log("Erro: O produto não existe no inventário.");
}

console.log(`Inventário atualizado: ${inventario}`);