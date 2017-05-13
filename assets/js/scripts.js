"use strict";

function soma(numeroA, numeroB){
    return numeroA + numeroB;
}
function subtrair(numeroA, numeroB){
    return numeroA - numeroB;
}
function multiplicar(numeroA, numeroB){
    return numeroA * numeroB;
}
function dividir(numeroA, numeroB){
    return numeroA / numeroB;
}

function ativarBotao(){

}

window.onload = function(){
    var botaoSOMAR = document.getElementById("somar"),
        botaoSUBTRAIR = document.getElementById("subtrair"),
        botaoMULTIPLICAR = document.getElementById("multiplicar"),
        botaoDIVIDIR = document.getElementById("dividir");

    var campoA = document.getElementById("numeroA"),
        campoA = document.getElementById("numeroA");

    botaoSOMAR.addEventListener("click",function(){
        var numeroA = Number(campoA.value),
            numeroB = Number(campoB.value);
        document.getElementById("resultado").innerHTML = soma(numeroA,numeroB; 
    });

    
};

