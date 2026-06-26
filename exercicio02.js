let preco = Number(prompt("Digite o preço de custo do produto"));
let porcentagem = Number(prompt("Digite a porcentagem desejada"));

let valor = preco * (porcentagem / 100);
let precoFinal = preco + valor

alert(`O valor do lucro é ${valor.toFixed(2)} e o preço final é ${preco.toFixed(2)}`)