let opcao;
const dolar = 5.19;
const euro = 5.91;

do {
    opcao = Number(prompt(
        "--- MENU DE CONVERSÃO ---\n" +
        "1 - Converter Dólar\n" +
        "2 - Converter Euro\n" +
        "3 - Sair"
    ));
    
    if (opcao === 1) {
        let valorReais = Number(prompt("Digite o valor em Reais para converter para Dólar:"));
        let convertido = valorReais / dolar;
        alert(`O valor convertido é: $ ${convertido.toFixed(2)} USD`);

    } else if (opcao === 2) {
        let valorReais = Number(prompt("Digite o valor em Reais para converter para Euro:"));
        let convertido = valorReais / euro;
        alert(`O valor convertido é: € ${convertido.toFixed(2)} EUR`);

    } else if (opcao === 3) {
        alert("Encerrando o programa.");
        
    } else {
        alert("Opção inválida! Tente novamente.");
    }

} while (opcao !== 3);