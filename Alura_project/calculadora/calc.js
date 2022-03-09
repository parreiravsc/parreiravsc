function Converter() {
    var incremento = document.getElementById("cotacao");
    var taxa = incremento.value;
    var taxa_num = parseFloat(taxa);
    //console.log(taxa_num); //dbok
    //console.log ("debug-ok");
    var valor_01 = document.getElementById("valor");
    //pegou o código html
    var valor_input = valor_01.value;
    //pega a string atribuida ao código html, sempre vai ser txt
    var valor_num = parseFloat(valor_input);
    //transformei o valor de texto para real
    //console.log(valor_num); //ok
    var valor_real = valor_num * taxa_num;
    //console.log(valor_real); // ok
    var html_valor_final = document.getElementById("valorConvertido");
    // pega a linha html
    var output_final = "R$ " + valor_real;
    html_valor_final.innerHTML = output_final;
}