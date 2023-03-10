const fatores = [1,2,3,4,5,6,7,8,9,10]

const numeroTabuada =Number(prompt('Digite um número para exibir a tabuada de 1 ao 10: '))

for ( let i in fatores){
    const resultado = numeroTabuada * fatores[i]
    console.log(`${numeroTabuada} X ${fatores[i]} =  ${resultado}`)
}



