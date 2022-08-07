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

    var result = weight / (height * height);

    var value_imc = document.querySelector("#result");

    value_imc_calc = result.toFixed(2)
    value_imc.textContent = result.toFixed(2).replace(".", ",");
    
   // console.log(value_imc_calc);

    resposta(value_imc_calc);
    
}
function resposta(a) {
    var resposta_imc = document.querySelector("#resposta");

   // console.log(a)
    var value = parseFloat(a);
   // console.log(typeof value)

    var resposta_txt = "";
    

    //console.log(value)

    if ((value >= 16) && (value <= 16.9)) {
        resposta_txt = "Muito abaixo do peso.";
    } else if ((value > 16.9) && (value <= 18.4)) {
        resposta_txt = "Abaixo do peso.";
    } else if ((value > 18.4) && (value <= 24.9)) {
        resposta_txt = "Peso normal.";
    } else if ((value > 24.9) && (value <= 29.9)) {
        resposta_txt = "Acima do peso.";
    } else if ((value > 29.9) && (value <= 34.9)) {
        resposta_txt = "Obesidade grau I.";
    } else if ((value > 34.9) && (value <= 40)) {
        resposta_txt = "Obesidade grau II.";
    } else if (value > 40) {
        resposta_txt = "Obesidade grau III.";
    } else {
        resposta_txt = "Invalido.";
    }
    //console.log(resposta_txt)
    resposta_imc.textContent = resposta_txt;


}