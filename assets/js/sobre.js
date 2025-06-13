// Animação dos números de estatísticas

const duracao = 5000; // 20 segundos
const intervalos = 100; // 100ms entre cada passo

document.querySelectorAll('.stat-number').forEach(contador => {
    const valorFinal = parseInt(contador.getAttribute('data-valor'), 10);
    const passos = duracao / intervalos;
    const incremento = valorFinal / passos;
    let valorAtual = 0;

    const animacao = setInterval(() => {
        valorAtual += incremento;
        if (valorAtual >= valorFinal) {
            valorAtual = valorFinal;
            clearInterval(animacao);
        }
        contador.textContent = Math.floor(valorAtual);
    }, intervalos);
});
