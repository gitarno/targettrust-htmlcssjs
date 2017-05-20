"use strict";
// Função som.a...
function soma(numeroA, numeroB) {
    return numeroA + numeroB;
}
// Função som.a...
function subtrair(numeroA, numeroB) {
    return numeroA - numeroB;
}
// Função som.a...
function multiplicar(numeroA, numeroB) {
    return numeroA * numeroB;
}
// Função som.a...
function dividir(numeroA, numeroB) {
    if(numeroB == 0){
        return "Ops, ZERO ??";
    }
    return numeroA / numeroB;
}
/*
    @name: adhakdjahsjkd,
    @parametros: dajhdadhjas,adha
    @description: 
        1. se ov aasdhaskdja
        2. ajkdhkadhkasjd
            2.1 akdshakdhkajs
*/
function validarCampoNaN($campo){
    if(isNaN($campo.value)){
        $campo.value = "";
        $campo.placeholder = "Digite um numero";
        return 0;
    }else{
        return Number($campo.value)
    };
}

function ativarBotao($botao,$metodo) {
    $botao.addEventListener("click", function () {
        console.log(campoA,campoB);
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

