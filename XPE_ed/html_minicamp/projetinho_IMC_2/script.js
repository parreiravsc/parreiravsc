function start() {
    var buttonStart = document.querySelector('#calculate_imc');
    //buttonStart.textContent = "uoou
   // console.log(buttonStart);
    buttonStart.addEventListener(('click'), handlecalculateIMC)
    // return result;
}

start();


function handlecalculateIMC() {
    
    var ip_weight = document.querySelector('#input-weight');
    var ip_height = document.querySelector('#input-height');

    var weight = Number(ip_weight.value);
    var height = Number(ip_height.value);

    var result = weight / (height + height);

    var value_imc = document.querySelector("#result");

    value_imc.textContent = result.toFixed(2).replace(".", ",");
    
    console.log(result);

    resposta(value_imc);
    
}
function resposta(a) {
    var resposta_imc = document.querySelector("#resposta");
    var value = a;
    if ((a >= 16) && (a <= 16.9)) {
        resposta_txt = "Muito abaixo do peso.";
    } else if ((a > 16.9) && (a <= 18.4)) {
        resposta_txt = "Abaixo do peso.";
    } else if ((a > 18.4) && (a <= 24.9)) {
        resposta_txt = "Peso normal.";
    } else if ((a > 24.9) && (a <= 29.9)) {
        resposta_txt = "Acima do peso.";
    } else if ((a > 29.9) && (a <= 34.9)) {
        resposta_txt = "Obesidade grau I.";
    } else if ((a > 34.9) && (a <= 40)) {
        resposta_txt = "Obesidade grau II.";
    } else if (a > 40) {
        resposta_txt = "Obesidade grau III.";
    }

    resposta_imc.textContent = resposta_txt;


}