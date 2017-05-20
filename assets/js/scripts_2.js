"use strict";

var nome = "Arno Roldão",
    data = 20;


window.onload = function(){
    console.log("Bem vindo!" + nome);
    console.log("Atenção não digite nada nessa área, que você não saiba!")


    var objeto = {
            nome: "Arno Roldão",
            sobrenome: "Junior",
            idade: 30,
            email: "arno@advg.com.br",
            falar: function(){
                console.log("Olá!");
            }
        };
    
    console.log(objeto.nome);

    objeto.falar();

    var meuArray = [
        nome,
        objeto,
        "adsasda",
        12311
    ];

    console.log(objeto.nome.length);
    console.log(objeto.nome[objeto.nome.length-1]);
    console.log(objeto.email.indexOf("@"));

    for(var i =0; i<10; i++ ){
        console.log(i);
    }

    var i = 0;
    do{
        console.log(i);
        i++;
    }while(i < 10);
    console.log(i);


    var menu = document.getElementById("menu-principal");
        console.log("Manipulando:" + menu.id);
        menu.style.background = "rgba(44, 62, 80, 0.7)";
        menu.className += " active";
        
}