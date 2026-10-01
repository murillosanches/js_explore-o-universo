//procure e selecione o elemento com a classe card destino
//e guarde em uma variavel chamada primeiro card
let primeiroCard = document.querySelector('.card-destino');

//procure e selecione o botao de curiosidade sobre a lua 
let botaoCuriosidade = document.querySelector(".button-curiosidade");


//procure e selecione o paragrafo com a curiosidade sobre a lua
let curiosidade = document.querySelector(".curiosidade");

/*Monitore o botao de curiosidade e quando acontecer o clique verifique.
Se a curiosidade esta oculta, se estiver faça ficar visivel mude o aria-expanded para true e troque o texto do botao para "ocultar curiosidade"*/
botaoCuriosidade.addEventListener("click", function (){
    
    if(curiosidade.hidden){
        curiosidade.hidden = false;
        botaoCuriosidade.setAttribute("aria-expanded", "true");
        botaoCuriosidade.textContent = "Ocultar curiosidade"
    } else{
        curiosidade.hidden = true;
        botaoCuriosidade.setAttribute("aria-expanded", "false");
        botaoCuriosidade.textContent = "Ver curiosidade"
        }
});