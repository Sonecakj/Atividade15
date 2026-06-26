let nota = []
let soma = 0

for(let contador = 0; contador < 8; contador++){
    let notaAluno = Number(prompt(`Digite a nota do aluno ${contador + 1}:`))
    nota.push(notaAluno)
    soma += notaAluno
}

let media = soma / nota.length
console.log(`A média das notas é ${media.toFixed(2)}`)
console.log(`Os alunos abaixo da média são:`)
for(let contador = 0; contador < nota.length; contador++){
    if(nota[contador] < media){
         console.log(`aluno ${contador + 1}: nota ${nota[contador]}`)
    }
}