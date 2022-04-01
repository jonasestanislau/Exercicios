//Selecionando o botão para poder acionar o evento que irá chamar a função
let btnVerificar = document.getElementById('btnVerificar');

//função que irá calcular a idade
function calculaIdade() {
    let data = new Date();  //objeto date
    let anoAtual = data.getFullYear(); // ano atual
    let anoNascimento = document.getElementById('anoNascimento'); // anos nascimento
    let resultado = document.getElementById('resultado');// resultado na tela

/*
    Verifica se os campos estão com os valores corretos e caso esteja, é selecionado o elemento 'radio' e seus valores quandochecado, é atribuído a variável genero
*/
if((anoNascimento.value.length == 0) || (anoNascimento.value > anoAtual))  {
    alert('[ERRO] Verifique os dados e tente novamente!');
}
else {
    let optSexo = document.getElementsByName('radioSexo');
    let idade = anoAtual - Number(anoNascimento.value);
    let genero = '';
    if(optSexo[0].checked) {
       genero = 'Homem';
    }
    else {
       genero = 'Mulher';
    }
       resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    }
}
// Evento que chama a função quando o botão é clicado
btnVerificar.addEventListener('click',calculaIdade);




