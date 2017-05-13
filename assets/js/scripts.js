"use strict";

function soma(numeroA, numeroB) {
    return numeroA + numeroB;
}
function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}
function dividir(numeroA, numeroB) {
    if(numeroA == 0 || numeroB == 0){
        return "Ops, ZERO ??";
    }
    return numeroA / numeroB;
}

function validarCampoNaN($campo){
    if(isNaN($campo.value)){
        $campo.value = "";
        $campo.placeholder = "Digite um numero";
        return 0;
    }else{
        return Number(campoB.value)
    };
}

function ativarBotao($botao,$metodo) {
    $botao.addEventListener("click", function () {
        var numeroA = validarCampoNaN(campoA),
            numeroB = validarCampoNaN(campoB);

        document.getElementById("resultado").innerHTML = $metodo(numeroA, numeroB); 
    });

}

window.onload = function () {
    var botaoSOMAR = document.getElementById("somar"),
        botaoSUBTRAIR = document.getElementById("subtrair"),
        botaoMULTIPLICAR = document.getElementById("multiplicar"),
        botaoDIVIDIR = document.getElementById("dividir");

    var campoA = document.getElementById("campoA"),
        campoB = document.getElementById("campoB");

    ativarBotao(botaoSOMAR,soma);
    ativarBotao(botaoSUBTRAIR,subtrair);
    ativarBotao(botaoMULTIPLICAR,multiplicar);
    ativarBotao(botaoDIVIDIR,dividir);
};

