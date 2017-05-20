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

    var nome = document.fale_conosco.nome,
        email = document.fale_conosco.email,
        telefone = document.fale_conosco.telefone;

    document.body.addEventListener("keydown", function (event) {
        // event.preventDefault();
        // console.log(event);
        switch (event.key) {
            case "b":
            case "a":
                console.log("Você apertou a tecla A ou B");
                break;
            default:
                console.log("Você digitou não sei o que...");
                break;
        }
    });


    document.fale_conosco.enviar.addEventListener("click", function () {
        //VAlidar Nome
        var validator = {
            nome: validarCampos(nome),
            email: validarCampos(email),
            telefone: validarCampos(telefone)
        }

        if (validator.nome && validator.email && validator.telefone) {
            console.log("Formulario enviado com sucesso!");
            document.fale_conosco.submit();
        } else {
            console.log("Prencha todos os campos!")
        }

    });



}

function validarCampos($campo) {
    if ($campo.value != "") {
        if($campo.type == "email" && $campo.value.indexOf("@") < 0){
            return false
        }
        $campo.removeAttribute("style");
        return true;

    } else {
        $campo.style.border = "1px solid red";
        return false;
    }
}