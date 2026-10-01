//selecionar todos os card
let cards = document.querySelectorAll(".card-destino");

/*percorrer todos os cards selecionados e para cada um (separadamente) pegar os botoes (botap curiosidade e botao favoritos)*/
cards.forEach( function(card){
    let botaoCuriosidade = card.querySelector('.button-curiosidade')
    let botaoFavorito = card.querySelector('.button-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener('click', function(){
        if(curiosidade.hidden){
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('aria-expanded', 'true')
            botaoCuriosidade.textContent = "Ocultar curiosidades"
        }else{
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", 'false')
            botaoCuriosidade.textContent= 'Ver curiosidade'
        }
    }) //fecha a curiosidade

    botaoFavorito.addEventListener('click', function(){

        //aplicar/remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado')

        //atualizar o estado do botao(aria pressed)
        botaoFavorito. setAttribute('aria-pressed', favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if(favoritado){
            botaoFavorito.textContent= '★ Favoritado'
        } else{
            botaoFavorito. textContent=' ☆ Favorito'
        }

    })
      
} ) 

