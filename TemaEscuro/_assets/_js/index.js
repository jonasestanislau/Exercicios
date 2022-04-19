let btn = document.getElementById('btn');

btn.addEventListener('change', function(e){
    e.preventDefault()
    if(btn.checked == true) {
        window.document.body.style.background = '#222';
        btn.style.boxShadow = 'none';
    }else{
        window.document.body.style.background = '#fff';
        btn.style.boxShadow = '0px 0px 5px rgb(221, 221, 221)';
    }
})