let nome = window.document.getElementById('nome'); 
let email = document.querySelector('#email');
// a funcao seleciona o id da textArea
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let mapa = document.querySelector('#mapa');

// nome.style.width = '100%';

function validaNome() {
    let txtNome = document.querySelector('#txtNome');
    
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido!';
        txtNome.style.color = 'red';
    } else {
        txtNome.innerHTML= '';
        nomeOk = true;
    }
    
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!';
        txtEmail.style.color = "red";
    }else {
        txtEmail.innerHTML = '';
        emailOk = true;
    }
}

function validaAssunto() {
    // querySelector recebe o id da div
    let txtAssunto = document.querySelector('#txtAssunto');
    // assunto é a let lá de cima
    if(assunto.value.length > 255) {
        txtAssunto.innerHTML = 'Limite máximo de caracteres (255)';
    } else {
        txtAssunto.innerHTML = '';
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Envio realizado com sucesso!'
        +'Obrigado por deixar uma mensagem!');
    } else {
        alert('Por gentileza, preencha corretamente todos os campos'
        + 'para que eu receba a mensagem!');
    }
}

function mapaZoom() {
    mapa.style.width = '500px';
    mapa.style.height = '400px';
}

function mapaNormal() {
    mapa.style.width = '300px';
    mapa.style.height = '230px';
}