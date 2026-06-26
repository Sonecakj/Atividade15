let saldo = Number(prompt("Digite o seu saldo atual"));
let saque = Number(prompt("Digite o valor do saque que deseja"));

if (saque <= saldo) {
    let novoSaldo = saldo - saque;
    console.log(`Saque realizado com sucesso! Novo saldo: R$ ${novoSaldo.toFixed(2)}`);
} else {
    console.log(`Saldo insuficiente.`);
}