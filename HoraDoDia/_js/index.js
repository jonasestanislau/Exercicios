function hora() {
    //Selecionando os elementos
    let campohoraAtual = document.querySelector("#campohoraAtual");
    let imagem = document.getElementById("campo_img");
    
    let horaAtual = new Date();

    if(horaAtual.getHours() >0 && horaAtual.getHours() <= 12) {
        campohoraAtual.innerHTML = `Agora são ${horaAtual.getHours()} horas`;
        document.body.style.background= "#D9B448";
        imagem.style.background = 'URL(_assets/img01.webp)'
        imagem.style.backgroundSize = 'cover';
        imagem.style.backgroundPosition = 'center';
    }
    else if(horaAtual.getHours() > 12 && horaAtual.getHours() <= 18){
        campohoraAtual.innerHTML = `Agora são ${horaAtual.getHours()} horas`;
        document.body.style.background = "#836d2a";
        imagem.style.background = 'URL(_assets/img02.jpg)'
        imagem.style.backgroundSize = 'cover';
        imagem.style.backgroundPosition = 'center';
    }
    else {
        campohoraAtual.innerHTML = `Agora são ${horaAtual.getHours()} horas`;
        document.body.style.background = "#414141";
        imagem.style.background = 'URL(_assets/img3.jpg)'
        imagem.style.backgroundSize = 'cover';
        imagem.style.backgroundPosition = 'center';
    }
}




