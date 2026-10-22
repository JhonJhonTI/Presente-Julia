
function irPara(id) {
    document.querySelectorAll('.tela').forEach((tela) => {
        tela.classList.remove('ativa');
    });

    const destino = document.getElementById(id);

    if (destino) {
        destino.classList.add('ativa');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Data do primeiro beijo: 4 de setembro de 2026, aproximadamente às 12h.
const DATA_INICIO = '2026-09-04T12:00:00';

function atualizarContador() {
    const inicio = new Date(DATA_INICIO).getTime();
    const agora = Date.now();

    const diferenca = agora - inicio;

    if (diferenca < 0) {
        document.getElementById('dias').textContent = '0';
        document.getElementById('horas').textContent = '0';
        document.getElementById('minutos').textContent = '0';
        document.getElementById('segundos').textContent = '0';
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );
    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );
    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);
