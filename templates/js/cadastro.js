document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão
    
    // Pegando os valores dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirm = document.getElementById('confirm').value
    var endereco = document.getElementById("endereco").value
    var cpf = document.getElementById("cpf").value
    var sexo = document.getElementById("sexo").value
    var nascimento = document.getElementById("nascimento").value

    
    // Exibindo os valores no console (pode ser substituído por uma requisição AJAX, por exemplo)
    console.log('Nome: ' + nome);
    console.log('Email: ' + email);
    console.log('Senha: ' + senha);
    console.log('Confirm: ' + confirm);
    console.log('Endereço: ' + endereco);
    console.log('CPF: ' +  cpf);
    console.log('Sexo: ' + sexo);
    console.log('Nascimento: ' + nascimento);
    
    // Aqui você pode adicionar código para enviar os dados para o servidor, fazer validações adicionais, etc.
});