const senha = "segredo123";
let sucesso = false;

for(let contador = 0; contador < 3; contador++){
    let tentativa = prompt(`Tentativa ${contador}/3: Digite a senha`);

    if(tentativa === senha){
        console.log("Acesso permitido");
        sucesso = true;
        break;
    }
}
if(sucesso === false){
    console.log("Conta bloqueada");
}