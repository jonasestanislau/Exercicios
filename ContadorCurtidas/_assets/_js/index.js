const btnCurtir = document.querySelectorAll('span')// Seleciona todos os elementos dentro da tag span
const totalCurtidas = document.getElementById('totalCurtidas');// div que mostra o total de curtidas;
let contador = 0;// variável que armazena o total de curtidas


btnCurtir.forEach((item) => {
    let stateClick = true;// variável que armazena o valor de true ou false para o quando ocorrer o click
    item.children[1].addEventListener('click', () => {
        //condição para alterar o valor da variável stateClick e alterar o estilo dos elementos mostrados na tela
        if(stateClick === true) {
            totalCurtidas.textContent = ++contador;
            item.children[0].textContent = 1;
            item.children[1].style.color = '#09c';
            stateClick = false;
        }else {
            totalCurtidas.textContent = --contador;
            item.children[0].textContent = 0;
            item.children[1].style.color = '#000';
            stateClick = true;
        }
    })
})




