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