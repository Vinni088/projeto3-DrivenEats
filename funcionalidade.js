function marque1(seletor) {
    const botaomarcado = document.querySelector('.marcado1');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado1');
    }
    seletor.classList.toggle("marcado1");

    let checkmarcado1 = document.querySelector('.checkmark1');
    let checkmarcado2 = document.querySelector('.checkmark2');
    let checkmarcado3 = document.querySelector('.checkmark3');
    if ( checkmarcado1.classList.contains('escondido') === false || checkmarcado2.classList.contains('escondido') === false || checkmarcado3.classList.contains('escondido') === false){
        //remove a classe selecionado desse botao
        checkmarcado1.classList.add('escondido');
        checkmarcado2.classList.add('escondido');
        checkmarcado3.classList.add('escondido');

    }

    const checkzin = document.querySelector('.marcado1 .check');
    checkzin.classList.remove('escondido');
	
    check();
}
function marque2(seletor) {
    const botaomarcado = document.querySelector('.marcado2');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado2');
    }
    seletor.classList.toggle("marcado2");

    /////////////////////////////////////////////////////////////////////////////

    let checkmarcado1 = document.querySelector('.checkmark4');
    let checkmarcado2 = document.querySelector('.checkmark5');
    let checkmarcado3 = document.querySelector('.checkmark6');
    if ( checkmarcado1.classList.contains('escondido') === false || checkmarcado2.classList.contains('escondido') === false || checkmarcado3.classList.contains('escondido') === false){
        //remove a classe selecionado desse botao
        checkmarcado1.classList.add('escondido');
        checkmarcado2.classList.add('escondido');
        checkmarcado3.classList.add('escondido');

    }
    const checkzin = document.querySelector('.marcado2 .check');
    checkzin.classList.remove('escondido');

	/////////////////////////////////////////////////////////////////////////////

    check();
}
function marque3(seletor) {
    const botaomarcado = document.querySelector('.marcado3');
    if ( botaomarcado !== null ){
        //remove a classe selecionado desse botao
        botaomarcado.classList.remove('marcado3');
    }
	seletor.classList.toggle("marcado3");

    /////////////////////////////////////////////////////////////////////////////

    let checkmarcado1 = document.querySelector('.checkmark7');
    let checkmarcado2 = document.querySelector('.checkmark8');
    let checkmarcado3 = document.querySelector('.checkmark9');
    if ( checkmarcado1.classList.contains('escondido') === false || checkmarcado2.classList.contains('escondido') === false || checkmarcado3.classList.contains('escondido') === false){
        //remove a classe selecionado desse botao
        checkmarcado1.classList.add('escondido');
        checkmarcado2.classList.add('escondido');
        checkmarcado3.classList.add('escondido');

    }
    const checkzin = document.querySelector('.marcado3 .check');
    checkzin.classList.remove('escondido');

	/////////////////////////////////////////////////////////////////////////////

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
    price3.innerHTML = desertPrice.innerHTML;

    const str1 =dishPrice.innerHTML
    const str2 =drinkPrice.innerHTML
    const str3 =desertPrice.innerHTML
    let valor1 = str1.replace(/[^0-9]/g,"");
    let valor2 = str2.replace(/[^0-9]/g,"");
    let valor3 = str3.replace(/[^0-9]/g,"");
    let soma = (Number(valor1) + Number(valor2) + Number(valor3))/100;
    let valorfinal = "R$ " + String(soma.toFixed(2));

    const priceF = document.querySelector('.total-preco');
    priceF.innerHTML = valorfinal;
    
    let mensagem = "Olá, gostaria de fazer o pedido: " + "\n" +
    "- Prato: " + dishName.innerHTML + "\n" +
    "- Bebida: " + drinkName.innerHTML + "\n" +
    "- Sobremesa: " + desertName.innerHTML + "\n" +
    "Total: " + valorfinal;
    window.link = "https://wa.me/5561986796160?text=" + encodeURIComponent(mensagem);
    

    /////////////////////////////////////////////////////////////////////////////
}
function escolherdenovo() {
    const menuconfirmação = document.querySelector('.Finalizar-mesmo');
    menuconfirmação.classList.toggle('escondido')
}

function encodeMsg(x) {
    encodeURIComponent(x);
}