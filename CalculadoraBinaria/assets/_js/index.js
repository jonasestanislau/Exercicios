//Selecionando os elementos HTML
let inputNumero = document.getElementById('inputNumero');
let inputResultado = document.getElementById('inputResultado');
let formulario = document.querySelectorAll('input[type="radio"]');

//Adicionando um addEventListener a cada item e mostrando o resultado do calculo de acordo com a opção escolhida
formulario.forEach(function(item){
    item.addEventListener('change',function(e){
        e.preventDefault();
        if(inputNumero.value === '') {
            alert('[ERRO]: O campo número não pode ser vazio! Digite um número para continuar')
        }
        else if(item.value === 'binario'){
            inputResultado.value = Number(inputNumero.value).toString(2);
        }
        else if(item.value === 'octal'){
            inputResultado.value = Number(inputNumero.value).toString(8);
        }
        else if(item.value === 'decimal'){
            inputResultado.value = Number(inputNumero.value).toString(10);
        }
        else {
            inputResultado.value = Number(inputNumero.value).toString(16);
        }
    })
})
