let produtos = ["Teclado", "Mouse", "Monitor", "Cadeira"];
let estoque = [
    [10, 5],
    [20, 15],
    [8, 2],
    [5, 5]
];

function exibirInventario(listaProd, mEstoque) {
    console.log("Inventário Consolidado");
    
    for (let i = 0; i < listaProd.length; i++) {
        let total = mEstoque[i][0] + mEstoque[i][1];
        
        console.log(`Produto: ${listaProd[i]} | Total em Estoque: ${total}`);
    }
}

exibirInventario(produtos, estoque);