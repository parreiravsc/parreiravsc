//instacianciando o xml em uma var
var ajax = new XMLHttpRequest();

ajax.open("GET", "lista.php", );
ajax.responseType = "json";
ajax.send(); //usado para levar informações, não vou usar 

//console.log("teste")

var btn = document.getElementById('btn');
btn.addEventListener("click".function() {

    //verificar se a requisição está funcionando
    ajax.addEventListener("readystatechange", function() {
        //console.log(ajax.readyState);
        //console.log(ajax.status)
        // significados dos status (https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
        if (ajax.readyState === 4 && ajax.status === 200) {
            //alert("funcionou")
            console.log(ajax);
            console.log(ajax.response);
            var resposta = ajax.response;
            var list = document.querySelector('.list');
            for (var i = 0; i < resposta.length; i++) {
                //console.log(resposta[i]);
                list.innerHTML += "<li>" + resposta[i] + "<li>";
            }
        }
    })
})

//ajax.onreadystatechange = function(){}