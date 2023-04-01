function marque1(seletor) {
    const botaomarcado = document.querySelector('.marcado1');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado1');
    }
	seletor.classList.toggle("marcado1");
    check();
}
function marque2(seletor) {
    const botaomarcado = document.querySelector('.marcado2');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado2');
    }
	seletor.classList.toggle("marcado2");
    check();
}
function marque3(seletor) {
    const botaomarcado = document.querySelector('.marcado3');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado3');
    }
	seletor.classList.toggle("marcado3");
    check();
}


function check() {
    const marcador1 = document.querySelector('.marcado1');
    const marcador2 = document.querySelector('.marcado2');
    const marcador3 = document.querySelector('.marcado3');
    if (marcador1 !== null && marcador2 !== null && marcador3 !== null  ) {
    const finalizador = document.querySelector('.finalizar-pedido');
    finalizador.classList.add('final-pronto');
    finalizador.disabled = false;
    finalizador.innerHTML  = "Fechar Pedido";
    }
}

function confirmação() {
    const menuconfirmação = document.querySelector('.Finalizar-mesmo');
    menuconfirmação.classList.remove('escondido')
    configuraMenu();
    
}

function configuraMenu() {
    const dishName = document.querySelector('.marcado1 h1');
    let dish = document.querySelector('.dish-nome');
    dish.innerHTML = dishName.innerHTML;

    const dishPrice = document.querySelector('.marcado1 h3');
    let price1 = document.querySelector('.dish-preco');
    price1.innerHTML = dishPrice.innerHTML;

    /////////////////////////////////////////////////////////////////////////////

    const drinkName = document.querySelector('.marcado2 h1');
    let drink = document.querySelector('.drink-nome');
    drink.innerHTML = drinkName.innerHTML;

    const drinkPrice = document.querySelector('.marcado2 h3');
    let price2 = document.querySelector('.drink-preco');
    price2.innerHTML = drinkPrice.innerHTML;

    /////////////////////////////////////////////////////////////////////////////

    const desertName = document.querySelector('.marcado3 h1');
    let desert = document.querySelector('.desert-nome');
    desert.innerHTML = desertName.innerHTML;

    const desertPrice = document.querySelector('.marcado3 h3');
    let price3 = document.querySelector('.desert-preco');
    price3.innerHTML = dishPrice.innerHTML;

    /////////////////////////////////////////////////////////////////////////////
}