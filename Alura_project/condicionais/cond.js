var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var result = document.getElementById("resultado");

    var chute = parseInt(document.getElementById("valor").value);
    //console.log(chute) //db-ok
    if (chute == numeroSecreto) {
        result.innerHTML = "Você acertou!";
        //  console.log("acertou")// db-ok
    } else if (chute > 10 || chute < 0) {
        result.innerHTML = "O número digitado deve estar em 0 e 10";
        //  console.log("o número digitado deve estar em 0 e 10")
    } else {
        result.innerHTML = "Você errou!";
        if (chute > numeroSecreto) {
            result.innerHTML = "Errou! O número secreto é menor!";
        } else {
            result.innerHTML = "Errou! O número secreto é maior!";
        }

        //  console.log("errou") //db-ok
    }
}