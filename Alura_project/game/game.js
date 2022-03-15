//criar um array que contem diferentes objetos
var cartas = [
    carta1 = { nome: "Ayrtu Lopes", atributos: { amassabilidade: 6, heteronormatividade: 3, julgabilidade: 10 } },
    carta2 = { nome: "Polegod", atributos: { amassabilidade: 8, heteronormatividade: 10, julgabilidade: 4 } },
    carta3 = { nome: "Pedru mlk", atributos: { amassabilidade: 9, heteronormatividade: 2, julgabilidade: 4 } },
    carta4 = { nome: "Nandin", atributos: { amassabilidade: 7, heteronormatividade: 6, julgabilidade: 8 } },
    carta5 = { nome: "Heron muso", atributos: { amassabilidade: 10, heteronormatividade: 1, julgabilidade: 7 } }

]

//console.log(carta4.atributos.amassabilidade) //ok
//console.log(cartas)//ok

//sortear cartas
var carta_bot = 0
var carta_player = 0

function sortear_carta() {
    var numero_carta_bot = parseInt(Math.random() * 5)
    carta_bot = cartas[numero_carta_bot]
    var numero_carta_player = parseInt(Math.random() * 5)
    carta_player = cartas[numero_carta_player]

    //impede que as cartas sejam iguais
    while (numero_carta_bot == numero_carta_player) {
        numero_carta_bot = parseInt(Math.random() * 5)
        numero_carta_player = parseInt(Math.random() * 5)
    }
    // console.log(carta_bot)//ok
    console.log(carta_player) //ok

    //apos sortear as cartas  vou habilitar o botao de jogar e desabilitar o de sortear
    //console.log(document.getElementById("btnSortear").disabled)
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    mostrar_pj()
    exibir_atributos()
}

function mostrar_pj() {
    var mostrar = document.getElementById("mostrar_pj")
    var txt_mostrar = carta_player.nome + " VS " + carta_bot.nome
    mostrar.innerHTML = txt_mostrar

}

//carta player ja foi definida na função de sortear

function exibir_atributos() {
    var opcoes = document.getElementById("opcoes")
    var opcoes_imprimir = ""
    for (var atributo in carta_player.atributos) {
        // console.log(atributo)//ok
        opcoes_imprimir += "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoes_imprimir

}
//ja podemos delecionar o atributo, div opcoes agora é um input

function obter_atributo() {

    var radio_apostas = document.getElementsByName("atributo")
        //essa tag com name foi criada dentro do html é o input que criamos 
    for (var i = 0; i < radio_apostas.length; i++)
    //console.log(radio_apostas[i])
        if (radio_apostas[i].checked == true) {
            //console.log(radio_apostas[i])
            return radio_apostas[i].value
        }

}


function jogar() {
    var atributo_escolhido = obter_atributo()
        //console.log(atributo_escolhido)
        //console.log(carta_player.atributos[atributo_escolhido])
    var valor_jogador = carta_player.atributos[atributo_escolhido]
    var valor_bot = carta_bot.atributos[atributo_escolhido]
    var resultado = document.getElementById("resultado")

    if (valor_jogador > valor_bot) {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome
    } else if (valor_jogador < valor_bot) {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome
    } else {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é igual a " + atributo_escolhido + " de " + carta_bot.nome
    }
}