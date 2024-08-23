const txtName = document.getElementById("nome");
const txtSobrenome = document.getElementById("sobrenome");
const txtEmail = document.getElementById("email");
const number = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const arquivo = document.getElementById("arquivo");

function SubmitForms()
{

}


function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    return telefone;
}

function aplicarMascara(event) {
    const campo = event.target;
    campo.value = formatarTelefone(campo.value);
}

