const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", function(event) {
    // Previne o comportamento padrão do formulário (envio e recarregamento da página)
    event.preventDefault();

    // Obtém o valor inserido pelo usuário no campo de localidade
    const local = document.getElementById('searchTxt').value;

    console.log(local);

    
    
})
