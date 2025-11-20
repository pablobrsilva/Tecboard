const btnTema = document.querySelector(".cabecalho__btn-tema");
const body = document.body;
const logo = document.querySelector(".cabecalho__logo");
let alternandoTema = false;


btnTema.addEventListener("click", () => {

    alternandoTema = body.classList.contains("dark") ? true : false;

    if(alternandoTema){  
        body.classList.replace("dark", "light")
        logo.setAttribute("src", "./img/logo-tecboard-preto.png");
        btnTema.setAttribute("src", "./img/botao-alterar-tema-dark.png");
    } else {
        body.classList.replace("light", "dark")
        logo.setAttribute("src", "./img/logo-tecboard-branco.png");
        btnTema.setAttribute("src", "./img/botao-alterar-tema-light.png");
    }
});