//var Rafa = {nome: "Rafa", vitorias:0, empates:0, derrotas:0, pontos:0};
//console.log(Rafa)//ok
//var Paulo = {nome: "Paulo", vitorias:0, empates:0,  derrotas:0, pontos:0};
//console.log(Paulo.nome)//ok




function calcula_pontos(player) {
    var pontos = (player.vitorias * 3) + (player.empates * 1)
        //console.log(pontos)//ok
    return pontos
}

//Rafa.pontos = calcula_pontos(Rafa)
// console.log(Rafa)
var lista_jogadores = []

exibir_tela(lista_jogadores)
    //exibir jogadores na tela


function exibir_tela(jogadores) {
    //console.log(jogadores)
    //calculando os pontos 

    var elemento = ""
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }
    var tabela_jogadores = document.getElementById("tabelaJogadores")
    tabela_jogadores.innerHTML = elemento

}
//calculando vitorias e derrotas


function adicionarVitoria(i) {
    var jogador = lista_jogadores[i]
        //console.log(jogador)
    jogador.vitorias++
        jogador.pontos = calcula_pontos(lista_jogadores[i])
    exibir_tela(lista_jogadores)
}


function adicionarEmpate(i) {
    var jogador = lista_jogadores[i]
    jogador.empates++
        jogador.pontos = calcula_pontos(lista_jogadores[i])
    exibir_tela(lista_jogadores)
}

function adicionarDerrota(i) {
    var jogador = lista_jogadores[i]
    jogador.derrotas++
        //jogador.pontos = calcula_pontos(lista_jogadores[i])
        exibir_tela(lista_jogadores)
}



//adicionando novos jogadores


function add_jogador() {
    //console.log(lista_jogadores)//ok
    var novo_jogador = document.getElementById("novo_jogador").value
        //console.log(novo_jogador)//ok
    var array_novo = { nome: novo_jogador, vitorias: 0, derrotas: 0, empates: 0, pontos: 0 }
    lista_jogadores.push(array_novo)
    document.getElementById("novo_jogador").value = ""
    exibir_tela(lista_jogadores)

}


//apagando a tabela
function refresh() {
    lista_jogadores = []
    exibir_tela(lista_jogadores)
}