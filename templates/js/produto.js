function addToCart() {
    var size = document.getElementById('size').value;
    var quantity = document.getElementById('quantity').value;

    // Aqui você pode adicionar a lógica para adicionar ao carrinho
    // Por exemplo, enviar os dados para um servidor, atualizar um carrinho virtual, etc.
    // Neste exemplo, vamos apenas exibir uma mensagem simples
    alert('Produto adicionado ao carrinho:\nTamanho: ' + size + '\nQuantidade: ' + quantity);
}