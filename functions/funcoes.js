
// funcoes void
let valor = 20

function incrementa(){
    console.log("Estou dentro da funcao")
}

incrementa()
console.log(valor)



// funcoes com parametro
 let valor = 20
 function mostraNome(nomeDaPessoa){
    console.log(nomeDaPessoa)
 }

 mostraNome("Richard")


 //funcao que soma
 function soma(numero1, numero2){
    let somaDosNumeros = numero1 + numero2

    console.log(somaDosNumeros)
 }

 soma(10,4)
 soma(2,5)


 //funcao com return
 function soma(numero1, numero2){
    const somaDosNumeros = numero1 + numero2

    return somaDosNumeros
 }

 const meusNumeros = soma(4,6)

 