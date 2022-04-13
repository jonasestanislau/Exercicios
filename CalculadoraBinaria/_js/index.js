let campoNumero = document.getElementById('campoNumero');
        let campoResultado = document.getElementById('campoResultado');

        function bin() {
            campoResultado.innerText = Number(campoNumero.value).toString(2);
        }
        function dec() {
            campoResultado.innerText = Number(campoNumero.value).toString(10);
        }
        function oct() {
            campoResultado.innerText = Number(campoNumero.value).toString(8);
        }
        function hex() {
            campoResultado.innerText = Number(campoNumero.value).toString(16).toUpperCase();
        }