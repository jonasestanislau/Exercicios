// Selecionando o button
const form = document.querySelectorAll('form')

btnMostrar.addEventListener('click', (e) => {
    e.preventDefault();// stop no form
    
    if(inputNumber == '') {// verificar se o campo number está vázio
        alert('[ERROR] O campo número não pode ser vazio!')
    }
    else {
        let contador = 1;
        const areaResultado = document.querySelector('#areaResultado');// div resultado

        while(contador <= 10) {
            areaResultado.innerHTML += `${inputNumber.value} x ${contador} = ${inputNumber.value*contador}<br/>`;
            contador++;
        }
    }
})




