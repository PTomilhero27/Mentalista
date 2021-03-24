// let numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let spanPontos = document.querySelector("strong");
let spanTentativas = document.querySelector("span");
let botao = document.querySelector(".btn");

let numeroTentativas = parseInt(document.querySelector("span").innerHTML);
let NumeroPontos = parseInt(document.querySelector("strong").innerHTML);

let valorInput = document.querySelector("input");

let resultado = document.querySelector(".resposta");

let voltar = document.querySelector(".reset");
let continua = document.querySelector(".continue");

var btnNova = document.createElement("button");

let numeroSecreto = getRandomInt(0, 10);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function checarResultado() {
    let numeroDigitado = +valorInput.value;
    while (numeroTentativas > 0) {
        if (numeroDigitado == numeroSecreto) {
            spanPontos.innerHTML = ++NumeroPontos;
            resultado.innerHTML += `<p>Acertou ! ✔️</p>`;
            voltar.innerHTML = "Resetar";
            continua.innerHTML = "continuar";

            botao.disabled = true;
            break;
        } else if (numeroDigitado > numeroSecreto) {
            numeroTentativas--;
            resultado.innerHTML += `<p>O numero é menor</p>`;
            spanTentativas.innerText = numeroTentativas;
            break;
        } else if (numeroDigitado < numeroSecreto) {
            numeroTentativas--;
            resultado.innerHTML += `<p>O numero é maior</p>`;
            spanTentativas.innerText = numeroTentativas;
            break;
        }
    }

    if (numeroTentativas == 0) {
        resultado.innerHTML += `<p>Acabaram suas tentativas<br/> O número era ${numeroSecreto}</p>`;
        botao.disabled = true;
        voltar.innerHTML = "voltar";
    }
}



function resetar() {
    numeroTentativas = 3;
    NumeroPontos = 0;
    spanPontos.innerHTML = NumeroPontos;
    spanTentativas.innerText = numeroTentativas;
    botao.disabled = false;
    resultado.innerHTML = ``;
    voltar.innerHTML = "";
    numeroSecreto = getRandomInt(0, 10);
    valorInput.value = "";

}

function continuar() {
    numeroTentativas = 3;
    spanTentativas.innerText = numeroTentativas;
    botao.disabled = false;
    resultado.innerHTML = ``;
    voltar.innerHTML = "";
    numeroSecreto = getRandomInt(0, 10);
    valorInput.value = "";

}