var listaFilmes = [
    "https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg",
    "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/1/10/Pok%C3%A9mon_2000.jpg"
];

//for (indice = 0; indice < listaFilmes.length; indice++) {
//  document.write("<img src=" + listaFilmes[indice] + ">");
//}

function listar() {
    for (indice = 0; indice < listaFilmes.length; indice++) {
        var print_final = document.getElementById("imagens_tela");
        var escreve = "<img src=" + listaFilmes[indice] + ">";
        console.log(escreve);
        print_final.innerHTML = print_final.innerHTML + escreve;
        //document.write("<img src=" + listaFilmes[indice] + ">");
    }
}

function adicionar() {}

function buscar() {}