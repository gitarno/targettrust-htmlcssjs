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

window.onload = function(){
    var botaoSOMAR = document.getElementById("somar"),
        botaoSUBTRAIR = document.getElementById("subtrair"),
        botaoMULTIPLICAR = document.getElementById("multiplicar"),
        botaoDIVIDIR = document.getElementById("dividir");


    botaoSOMAR.addEventListener("click",function(){
        console.log("Olá");
    });
};

