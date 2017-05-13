"use strict";
var meunome,
    minhaIdade, 
    meuSexo,
    habilitado;

meunome = "Arno Roldão Junior";
minhaIdade = 60;
meuSexo = null;
habilitado = false;

// Comentário em linha
//alert(meunome);
/*
 Comentário em bloco
*/
// console.log(meunome, minhaIdade, meuSexo);
// console.log("Olá, " + meunome);
// console.log(2+2); // SOMA
// console.log(2-2); // SUBTRAÇÃO
// console.log(2/2); // DIVISÃO
// console.log(2%2); // RESTO ou MOD
// var soma = 2+2;
// console.log("SOMA: "+ soma );

function soma(numeroA, numeroB){
    console.log("O Resultado é: "+ (numeroA + numeroB) );
}

soma();