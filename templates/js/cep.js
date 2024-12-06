function buscarCep() {

    // Atribuindo os id's html para as variáveis da function
    var cep = document.getElementById("cep")
    var rua = document.getElementById("endereco")
    var bairro = document.getElementById("bairro")
    var cidade = document.getElementById("cidade")
    var uf = document.getElementById("uf")

    // Manipulando o CEP
    cep.addEventListener("blur", async() => {

        var cepDigitado = document.getElementById("cep").value
        let url = `https://viacep.com.br/ws/${cepDigitado}/json`

        try {
            const resposta = await fetch(url)
            const data = await resposta.json()

            console.log(data);

            // CEP não encontrado
            if (data.erro) {
                alert("CEP Digitado é inválido")
                rua.value = ""
                bairro.value = ""
                cidade.value = ""
                uf.value = ""
            }

            else {
                rua.value = data.logradouro
                bairro.value = data.bairro
                cidade.value = data.localidade
                uf.value = data.uf

                // console.log(data.logradouro)
                // console.log(data.bairro)
                // console.log(data.localidade)
                // console.log(data.uf)

            }
        }

        

        

        catch (erro) {

            alert.textContent = "Erro ao buscar informações do CEP"
        }
    })

}

buscarCep()