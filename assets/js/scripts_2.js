"use strict";

var nome = "Arno Roldão",
    data = 20;

var objeto = {
    nome: "Arno Roldão",
    sobrenome: "Junior",
    idade: 30,
    email: "arno@advg.com.br",
    falar: function () {
        console.log("Olá!");
    }
};
var meuArray = [
    nome,
    objeto,
    "adsasda",
    12311
];

window.onload = function () {
    // console.log("Bem vindo!" + nome);
    // console.log("Atenção não digite nada nessa área, que você não saiba!")
    // console.log(objeto.nome);
    objeto.falar();
    // console.log(objeto.nome.length);
    // console.log(objeto.nome[objeto.nome.length - 1]);
    // console.log(objeto.email.indexOf("@"));
    var header = document.getElementById("menu-principal");
        // console.log("Manipulando:" + header.id);
        header.style.background = "rgba(44, 62, 80, 0.7)";
        header.className += " active";

    var menu = {
        logotipo: header.children[0],
        itens: header.children[1].children[0].children
    };

    console.log(menu.itens[0].children[0]);

    menu.itens[0].children[0].addEventListener("click",function(event){
        event.preventDefault();
        console.log(event);
        window.location.href = menu.itens[0].children[0].href;
    });


    menu.logotipo.innerHTML = "Olá, " + objeto.nome;

}