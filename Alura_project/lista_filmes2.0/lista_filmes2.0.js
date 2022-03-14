function adicionarFilme() {
    var filme_favorito = document.getElementById("filme").value;
    // console.log(filme_favorito); //ok

    var msg_erro = document.getElementById("error");

    if (filme_favorito.endsWith(".jpg")) {
        listar_filmes(filme_favorito, msg_erro);
    } else {
        msg_erro.innerHTML = "Endereço de filme inválido, insira uma imagem .jpg";
        // console.error("endereço de filme inválido, insira uma imagem .jpg"); //ok
    }

    document.getElementById("filme").value = ""; //apaga o link colocado dentro do console de input
}

function listar_filmes(filme, erro_alert) {
    var imagens_filme = "<img src = " + filme + ">";

    //printar na tela:
    var lista_filmes = document.getElementById("listaFilmes");
    //peguei a linha html
    lista_filmes.innerHTML = lista_filmes.innerHTML + imagens_filme;
    //alterei a linha html para o conteudo da var imagens_filme
    // printou na tela

    erro_alert.innerHTML = ""; //limpa a erro quando acerta
}