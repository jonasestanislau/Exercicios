const input = document.querySelector('input');
const button = document.querySelector('button');
const resultado = document.querySelector('.resultado');

button.addEventListener('click', (e) => {
    e.preventDefault();

    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - input.value;

    if(input.value == '') {
        alert('O campo abaixo não pode ser vazio!');
    }
    else if(input.value > dataAtual.getFullYear()) {
        alert('Seu ano de nascimento não pode ser maior que o ano atual!');
    }
    else {  
        resultado.innerHTML = `Sua idade é: ${Number(idade)}`;
    }
})
