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
    
    value_imc.textContent = result.toFixed(2).replace(".",",");

    console.log(result);
}