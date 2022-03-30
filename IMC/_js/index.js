// Selecionando os elementos HTML
let campoResultadoIMC = document.getElementById("campoResultadoIMC");
let campoResultadoSituacao = document.getElementById("campoResultadoSituacao");
let campoPeso = document.getElementById("campoPeso");
let campoAltura = document.getElementById("campoAltura");
let botaoCalcular = document.getElementById("botaoCalcular");

// Função que calcular o IMC
function calculoIMC() {
    peso = Number(campoPeso.value);
    altura = Number(campoAltura.value);
    imc_resultado = (peso/(altura*2));

    if(imc_resultado < 18.5) {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "ABAIXO DO PESO";
    }
    else if((imc_resultado >= 18.5) && (imc_resultado <= 24.9)) {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "PESO NORMAL";
    }
    else if((imc_resultado >= 25) && (imc_resultado <= 29.9)) {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "SOBREPESO";
    }
    else if((imc_resultado >= 30) && (imc_resultado <= 34.9)) {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "OBESIDADE GRAU I";
    }
    else if((imc_resultado >= 35) && (imc_resultado <= 39.9)) {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "OBESIDADE GRAU II";
    }else {
        campoResultadoIMC.innerText = imc_resultado.toFixed(3);
        campoResultadoSituacao.innerText = "OBESIDADE GRAU III";
    }
}

// Eventos para chamar a função calculoIMC()
botaoCalcular.addEventListener('click',calculoIMC);
