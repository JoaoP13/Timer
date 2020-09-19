const mostrador = document.querySelector('.mostrador');
const botaoIniciar = document.querySelector('.botaoIniciar');
const botaoPausar = document.querySelector('.botaoPausar');
const botaoZerar = document.querySelector('.botaoZerar');
let segundos = 0;
let timer;


// Função que cria a hora para o mostrador, baseado em uma quantidade de (mili)segundos
function criaHora(segundos) {
    let date = new Date(segundos * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

// Função que dá inicia o contador
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        mostrador.innerHTML = criaHora(segundos);
    }, 1000);
}

// Monitoramento do evento de clique do mouse no botão para iniciar o contador
botaoIniciar.addEventListener('click', evento => {
    mostrador.classList.remove('mostradorPausado');
    clearInterval(timer);
    iniciaRelogio();
});

// Monitoramento do evento de clique do mouse no botão para pausar o contador
botaoPausar.addEventListener('click', evento => {
    mostrador.classList.add('mostradorPausado');
    clearInterval(timer);
});

// Monitoramento do evento de clique do mouse no botão para zerar o contador
botaoZerar.addEventListener('click', evento => {
    mostrador.classList.remove('mostradorPausado');
    clearInterval(timer);
    segundos = 0;
    mostrador.innerHTML = criaHora(segundos);
});

