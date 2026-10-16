//selecionar todos os card
let cards = document.querySelectorAll(".card-destino");

/*percorrer todos os cards selecionados e para cada um (separadamente) pegar os botoes (botap curiosidade e botao favoritos)*/
cards.forEach(function (card) {
    let botaoCuriosidade = card.querySelector('.botao-curiosidade')
    let botaoFavorito = card.querySelector('.botao-favorito')
    let curiosidade = card.querySelector('.curiosidade')

    botaoCuriosidade.addEventListener('click', function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false;
            botaoCuriosidade.setAttribute('aria-expanded', 'true')
            botaoCuriosidade.textContent = "Ocultar curiosidades"
        } else {
            curiosidade.hidden = true
            botaoCuriosidade.setAttribute("aria-expanded", 'false')
            botaoCuriosidade.textContent = 'Ver curiosidade'
        }
    }) //fecha a curiosidade

    botaoFavorito.addEventListener('click', function () {

        //aplicar/remover a classe 'favoritado'
        let favoritado = card.classList.toggle('favoritado')

        //atualizar o estado do botao(aria pressed)
        botaoFavorito.setAttribute('aria-pressed', favoritado)

        // Atualizar o texto do botão (☆ Favorito ou ★ Favoritado)
        if (favoritado) {
            botaoFavorito.textContent = '★ Favoritado'
        } else {
            botaoFavorito.textContent = ' ☆ Favorito'
        }

        atualizarContadorFavoritos()

    })

})
// v2 e etc
const botoesFiltro = document.querySelectorAll('[data-filtro]');

botoesFiltro.forEach(function (botaoFiltro) {

    botaoFiltro.addEventListener("click", function () {
        //acessamos e guardamos o filtro escolhido

        const filtro = botaoFiltro.dataset.filtro;

        cards.forEach(function(card){
        //percorendo os card e mostrando as categorias 

            const categoria = card.dataset.categoria

            //mostrar todos os cards ou apenas os card das categorias filtras
            if(filtro === "todos" || categoria === filtro){
                card.hidden = false 
            } else{
                card.hidden = true
                
            }
        })

        botoesFiltro.forEach(function(botaoFiltro){
            if(botaoFiltro.dataset.filtro === filtro){
                botaoFiltro.classList.add("filtro-ativo")
                botaoFiltro.setAttribute("aria-pressed", "true")
            }else{
                botaoFiltro.classList.remove("filtro-ativo")

                botaoFiltro.setAttribute("aria-pressed", "false")
            }
        })

    })
})

/* versao 3 */ 
// selecinando os elementos do menu que serao manipulados 


const botaoMenu = document.querySelector(".botao-menu")

const navegacaoPrincipal = document.querySelector("#navegacao-principal")

botaoMenu.addEventListener("click", function(){
    const menuAberto = navegacaoPrincipal.classList.toggle("menu-aberto")

    botaoMenu.setAttribute("aria-expanded", menuAberto)

    //exercicio
    /* se o menu tiver aberto mostre no botao ✖ */ 
    /* se o menu tiver fechado mostre no  botao ☰ */ 

      if (menuAberto) {
            botaoMenu.textContent = 'Fechar ✖ '
        } else {
            botaoMenu.textContent = 'Menu ☰'
        }


})

//versao 4 

const quantidadeFavoritos = document.querySelector ("#quantidade-favoritos")

//funçao para atualizaçao dos favoritos

function atualizarContadorFavoritos(){

    let quantidade = 0
    //tem que percorrer todos os filtros ate os 'escondidos' 

    cards.forEach(function(card){

        if(card.classList.contains("favoritado")){
            quantidade++
        }
    })

    quantidadeFavoritos.textContent = quantidade


}