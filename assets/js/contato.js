document.getElementById('whatsappForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value.trim();
    const telefone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('message').value.trim();

    const numeroDestino = '5521976590294'; // Substitua pelo número de destino no formato internacional
    const texto = `Olá, meu nome é ${nome} \nTelefone: ${telefone}.\nEmail: ${email} \nAssunto: ${mensagem}`;
    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
    this.reset(); // limpa o formulário
});