function marque1(seletor) {
    const botaomarcado = document.querySelector('.marcado1');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado1');
    }
    let elemento1 = document.querySelector(seletor);
	elemento1.classList.toggle("marcado1");
}
function marque2(seletor) {
    const botaomarcado = document.querySelector('.marcado2');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado2');
    }
    let elemento1 = document.querySelector(seletor);
	elemento1.classList.toggle("marcado2");
}
function marque3(seletor) {
    const botaomarcado = document.querySelector('.marcado3');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado3');
    }
    let elemento1 = document.querySelector(seletor);
	elemento1.classList.toggle("marcado3");
}

const marcador1 = document.querySelector('.marcado1');
const marcador2 = document.querySelector('.marcado2');
const marcador3 = document.querySelector('.marcado3');

