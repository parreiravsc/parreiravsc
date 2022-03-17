//criar um array que contem diferentes objetos
var cartas = [
    (carta1 = {
        nome: "Ayrtu Lopes",
        imagem: "https://www.petz.com.br/blog/wp-content/uploads/2021/08/diferenca-entre-pato-e-cisne-3-1280x720.jpg",
        atributos: { amassabilidade: 6, heteronormatividade: 3, julgabilidade: 10 }
    }),
    (carta2 = {
        nome: "Polegod",
        imagem: "https://static8.depositphotos.com/1052928/952/i/600/depositphotos_9520406-stock-photo-duck-white.jpg",
        atributos: { amassabilidade: 8, heteronormatividade: 10, julgabilidade: 4 }
    }),
    (carta3 = {
        nome: "Pedru mlk",
        imagem: "https://biologo.com.br/bio/wp-content/uploads/2021/08/Aix-galericulata-pato-mandarim.jpg",
        atributos: { amassabilidade: 9, heteronormatividade: 2, julgabilidade: 4 }
    }),
    (carta4 = {
        nome: "Nandin",
        imagem: "https://m.media-amazon.com/images/I/71UYDqbMiQL._AC_SX425_.jpg",
        atributos: { amassabilidade: 7, heteronormatividade: 6, julgabilidade: 8 }
    }),
    (carta5 = {
        nome: "Heron muso",
        imagem: "https://static.vakinha.com.br/uploads/vakinha/image/403147/imagem-pato-engravatado-azuleditededited1.jpg",
        atributos: { amassabilidade: 10, heteronormatividade: 1, julgabilidade: 7 }
    })
];

//document.write(carta1.atributos.imagem) //ok
//console.log(cartas)//ok

//sortear cartas
var carta_bot = 0;
var carta_player = 0;
var resultado = document.getElementById("resultado");

function sortear_carta() {
    var numero_carta_bot = parseInt(Math.random() * 5);

    var numero_carta_player = parseInt(Math.random() * 5);

    //impede que as cartas sejam iguais
    while (numero_carta_bot == numero_carta_player) {
        numero_carta_bot = parseInt(Math.random() * 5);
        numero_carta_player = parseInt(Math.random() * 5);
    }

    carta_bot = cartas[numero_carta_bot];
    carta_player = cartas[numero_carta_player];
    // console.log(carta_bot)//ok
    //console.log(carta_player); //ok

    //apos sortear as cartas  vou habilitar o botao de jogar e desabilitar o de sortear
    //console.log(document.getElementById("btnSortear").disabled)
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    // exibir_atributos(); // nova versão, a exibir_carta_jogador já exibe os atributos
    resultado.innerHTML = ""
    exibir_carta_jogador();
    exibir_carta_maquina();


}


//carta player ja foi definida na função de sortear

// function exibir_atributos() {
//   var opcoes = document.getElementById("opcoes");
//   var opcoes_imprimir = "";
//   for (var atributo in carta_player.atributos) {
//     // console.log(atributo)//ok
//     opcoes_imprimir +=
//       "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo;
//   }
//   opcoes.innerHTML = opcoes_imprimir;
// } // foi transferida para o exibir carta jogador
//ja podemos delecionar o atributo, div opcoes agora é um input

function obter_atributo() {
    var radio_apostas = document.getElementsByName("atributo");
    //essa tag com name foi criada dentro do html é o input que criamos
    for (var i = 0; i < radio_apostas.length; i++)
    //console.log(radio_apostas[i])
        if (radio_apostas[i].checked == true) {
        //console.log(radio_apostas[i])
        return radio_apostas[i].value;
    }
}

function jogar() {
    var atributo_escolhido = obter_atributo();
    //console.log(atributo_escolhido)
    //console.log(carta_player.atributos[atributo_escolhido])
    var valor_jogador = carta_player.atributos[atributo_escolhido];
    var valor_bot = carta_bot.atributos[atributo_escolhido]; //criar um array que contem diferentes objetos
    var cartas = [
        (carta1 = {
            nome: "Ayrtu Lopes",
            imagem: "https://www.petz.com.br/blog/wp-content/uploads/2021/08/diferenca-entre-pato-e-cisne-3-1280x720.jpg",
            atributos: { amassabilidade: 6, heteronormatividade: 3, julgabilidade: 10 }
        }),
        (carta2 = {
            nome: "Polegod",
            imagem: "https://static8.depositphotos.com/1052928/952/i/600/depositphotos_9520406-stock-photo-duck-white.jpg",
            atributos: { amassabilidade: 8, heteronormatividade: 10, julgabilidade: 4 }
        }),
        (carta3 = {
            nome: "Pedru mlk",
            imagem: "https://biologo.com.br/bio/wp-content/uploads/2021/08/Aix-galericulata-pato-mandarim.jpg",
            atributos: { amassabilidade: 9, heteronormatividade: 2, julgabilidade: 4 }
        }),
        (carta4 = {
            nome: "Nandin",
            imagem: "https://m.media-amazon.com/images/I/71UYDqbMiQL._AC_SX425_.jpg",
            atributos: { amassabilidade: 7, heteronormatividade: 6, julgabilidade: 8 }
        }),
        (carta5 = {
            nome: "Heron muso",
            imagem: "https://static.vakinha.com.br/uploads/vakinha/image/403147/imagem-pato-engravatado-azuleditededited1.jpg",
            atributos: { amassabilidade: 10, heteronormatividade: 1, julgabilidade: 7 }
        })
    ];

    //document.write(carta1.atributos.imagem) //ok
    //console.log(cartas)//ok

    //sortear cartas
    var carta_bot = 0;
    var carta_player = 0;
    var resultado = document.getElementById("resultado");

    function sortear_carta() {
        var numero_carta_bot = parseInt(Math.random() * 5);

        var numero_carta_player = parseInt(Math.random() * 5);

        //impede que as cartas sejam iguais
        while (numero_carta_bot == numero_carta_player) {
            numero_carta_bot = parseInt(Math.random() * 5);
            numero_carta_player = parseInt(Math.random() * 5);
        }

        carta_bot = cartas[numero_carta_bot];
        carta_player = cartas[numero_carta_player];
        // console.log(carta_bot)//ok
        //console.log(carta_player); //ok

        //apos sortear as cartas  vou habilitar o botao de jogar e desabilitar o de sortear
        //console.log(document.getElementById("btnSortear").disabled)
        document.getElementById("btnSortear").disabled = true;
        document.getElementById("btnJogar").disabled = false;
        // exibir_atributos(); // nova versão, a exibir_carta_jogador já exibe os atributos
        resultado.innerHTML = ""
        exibir_carta_jogador();
        exibir_carta_maquina();


    }


    //carta player ja foi definida na função de sortear

    // function exibir_atributos() {
    //   var opcoes = document.getElementById("opcoes");
    //   var opcoes_imprimir = "";
    //   for (var atributo in carta_player.atributos) {
    //     // console.log(atributo)//ok
    //     opcoes_imprimir +=
    //       "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo;
    //   }
    //   opcoes.innerHTML = opcoes_imprimir;
    // } // foi transferida para o exibir carta jogador
    //ja podemos delecionar o atributo, div opcoes agora é um input

    function obter_atributo() {
        var radio_apostas = document.getElementsByName("atributo");
        //essa tag com name foi criada dentro do html é o input que criamos
        for (var i = 0; i < radio_apostas.length; i++)
        //console.log(radio_apostas[i])
            if (radio_apostas[i].checked == true) {
            //console.log(radio_apostas[i])
            return radio_apostas[i].value;
        }
    }

    function jogar() {
        var atributo_escolhido = obter_atributo();
        //console.log(atributo_escolhido)
        //console.log(carta_player.atributos[atributo_escolhido])
        var valor_jogador = carta_player.atributos[atributo_escolhido];
        var valor_bot = carta_bot.atributos[atributo_escolhido];

        if (valor_jogador > valor_bot) {
            resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome;
        } else if (valor_jogador < valor_bot) {
            resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome;
        } else {
            resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é igual a " + atributo_escolhido + " de " + carta_bot.nome;
        }
        document.getElementById("btnSortear").disabled = false;
        document.getElementById("btnJogar").disabled = true;

    }

    function exibir_carta_jogador() {
        var img_jogador = document.getElementById("carta-jogador");
        img_jogador.style.backgroundImage = `url(${carta_player.imagem})`;

        // `` é a sintaxe do css e o $ indica que vai entrar um js
        //poderia escrever com "", nesse caso:
        // img_jogador.style.backgroundImage = "url(" + carta_player.imagem + ")"

        var moldura =
            '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
        //style é o mesmo que tá no html, ta repetindo pq vai substituir, e o link da imagem é só para adicionar a moldura na imagem de background inserida no css
        var tag_para_atributos = "<div id='opcoes' class='carta-status'>";
        //pegar os atributos, copiei da função que pega os atributos
        var opcoes_imprimir = "";
        for (var atributo in carta_player.atributos) {
            // console.log(atributo)//ok
            opcoes_imprimir +=
                "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo + " " + carta_player.atributos[atributo] + "<br>";
        }

        var nome = `<p class = "carta-subtitle">${carta_player.nome}<\p>`

        img_jogador.innerHTML = moldura + nome + tag_para_atributos + opcoes_imprimir + "</div>"
    }

    function exibir_carta_maquina() {
        var img_bot = document.getElementById("carta-maquina");
        img_bot.style.backgroundImage = `url(${carta_bot.imagem})`;

        // `` é a sintaxe do css e o $ indica que vai entrar um js
        //poderia escrever com "", nesse caso:
        // img_jogador.style.backgroundImage = "url(" + carta_player.imagem + ")"

        var moldura =
            '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
        //style é o mesmo que tá no html, ta repetindo pq vai substituir, e o link da imagem é só para adicionar a moldura na imagem de background inserida no css
        var tag_para_atributos = "<div id='opcoes' class='carta-status'>";
        //pegar os atributos, copiei da função que pega os atributos
        var opcoes_imprimir = "";
        for (var atributo in carta_bot.atributos) {
            // console.log(atributo)//ok
            opcoes_imprimir +=
                "<p type='text' name = 'atributo' value ='" + atributo + "'>" + atributo + " " + "XX" + "<\p>";
        }

        var nome = `<p class = "carta-subtitle">${carta_bot.nome}<\p>`

        img_bot.innerHTML = moldura + nome + tag_para_atributos + opcoes_imprimir + "</div>"
    }

    if (valor_jogador > valor_bot) {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome;
    } else if (valor_jogador < valor_bot) {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é maior que a " + atributo_escolhido + " de " + carta_bot.nome;
    } else {
        resultado.innerHTML = "A " + atributo_escolhido + " de " + carta_player.nome + " é igual a " + atributo_escolhido + " de " + carta_bot.nome;
    }
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;

}

function exibir_carta_jogador() {
    var img_jogador = document.getElementById("carta-jogador");
    img_jogador.style.backgroundImage = `url(${carta_player.imagem})`;

    // `` é a sintaxe do css e o $ indica que vai entrar um js
    //poderia escrever com "", nesse caso:
    // img_jogador.style.backgroundImage = "url(" + carta_player.imagem + ")"

    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //style é o mesmo que tá no html, ta repetindo pq vai substituir, e o link da imagem é só para adicionar a moldura na imagem de background inserida no css
    var tag_para_atributos = "<div id='opcoes' class='carta-status'>";
    //pegar os atributos, copiei da função que pega os atributos
    var opcoes_imprimir = "";
    for (var atributo in carta_player.atributos) {
        // console.log(atributo)//ok
        opcoes_imprimir +=
            "<input type = 'radio' name = 'atributo' value ='" + atributo + "'>" + atributo + " " + carta_player.atributos[atributo] + "<br>";
    }

    var nome = `<p class = "carta-subtitle">${carta_player.nome}<\p>`

    img_jogador.innerHTML = moldura + nome + tag_para_atributos + opcoes_imprimir + "</div>"
}

function exibir_carta_maquina() {
    var img_bot = document.getElementById("carta-maquina");
    img_bot.style.backgroundImage = `url(${carta_bot.imagem})`;

    // `` é a sintaxe do css e o $ indica que vai entrar um js
    //poderia escrever com "", nesse caso:
    // img_jogador.style.backgroundImage = "url(" + carta_player.imagem + ")"

    var moldura =
        '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //style é o mesmo que tá no html, ta repetindo pq vai substituir, e o link da imagem é só para adicionar a moldura na imagem de background inserida no css
    var tag_para_atributos = "<div id='opcoes' class='carta-status'>";
    //pegar os atributos, copiei da função que pega os atributos
    var opcoes_imprimir = "";
    for (var atributo in carta_bot.atributos) {
        // console.log(atributo)//ok
        opcoes_imprimir +=
            "<p type='text' name = 'atributo' value ='" + atributo + "'>" + atributo + " " + "XX" + "<\p>";
    }

    var nome = `<p class = "carta-subtitle">${carta_bot.nome}<\p>`

    img_bot.innerHTML = moldura + nome + tag_para_atributos + opcoes_imprimir + "</div>"
}