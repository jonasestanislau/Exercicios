
//Selecionando o botão para poder acionar o evento que irá chamar a função
let btnMostrar = document.getElementById('btnMostrar');

function mostraTabuada() {
    let numeroTabuada = document.getElementById('numeroTabuada');
    let tab = document.getElementById('seltab');
    

    if(numeroTabuada.value.length == 0) {
        alert("[ERRO], digite um número para prosseguir!")
    }
    else {
        let valor = Number(numeroTabuada.value);
        let inicio = 1;
        tab.innerHTML = '';
        while(inicio <= 10) {
                let item = document.createElement('option');
                item.text = `${valor} x ${inicio} = ${valor*inicio}`;
                tab.appendChild(item)
                inicio++;



            // document.write(`${valor} x ${inicio} = ${valor*inicio} <br>`)
            // resultado = `${valor} x ${inicio} = ${valor*inicio} <br>`;
        }
    }
}

// Evento que chama a função quando o botão é clicado
btnMostrar.addEventListener('click',mostraTabuada);




