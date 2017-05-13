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
    return numeroA / numeroB;
}

function ativarBotao($botao,$metodo) {
    $botao.addEventListener("click", function () {
        var numeroA = Number(campoA.value),
            numeroB = Number(campoB.value);

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

