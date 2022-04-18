// Selecionando o elemento
const btnCurtir = document.querySelector('.icone')
const expressao = document.querySelector('.expressao')
const contador = document.querySelector('.contador')

// Variavel para armezar o valor do 'click'
let stateClick = true;

btnCurtir.addEventListener('click', function(){
    if(stateClick == true) {
        btnCurtir.style.color = '#f45';
        contador.innerHTML = '1';
        stateClick = false;
    }
    else {
        btnCurtir.style.color = '#fcbdc2';
        contador.innerHTML = '0';
        stateClick = true;
    }
}) ; 