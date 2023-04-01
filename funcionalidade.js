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
