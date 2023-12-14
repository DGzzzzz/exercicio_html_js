const form = document.getElementById('validador');

let formValid = false;

function numberValid (valA, valB) {
    return valA < valB;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let valA = parseFloat(document.getElementById('numero-A').value);
    let valB = parseFloat(document.getElementById('numero-B').value);

    const mensagemSucesso = 'Verificado que o <b> Numero B </b> é maior que o <b> Numero A </b>. Portanto o formulário foi salvo com sucesso!'
    const containermensagemSucesso = document.querySelector('.success-message');

    formValid = numberValid(valA, valB);

    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display= 'block';
        document.querySelector('.error-message').style.display = 'none';

        valA.value = '';
        valB.value = '';
        
        
    }   else {
        document.querySelector('.error-message').style.display = 'block';
        containermensagemSucesso.style.display = 'none';
    }
})